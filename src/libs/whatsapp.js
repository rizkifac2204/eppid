import { rmSync, createWriteStream } from "fs";
import getLogger from "middlewares/getLogger";
import pino from "pino";
const https = require("https");
const {
  default: makeWASocket,
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  delay,
  makeCacheableSignalKeyStore,
} = require("@adiwajshing/baileys");
const msgRetryCounterMap = {};
const sessionName = "mainId";
const sessions = new Map();
// const useStore = !process.argv.includes("--no-store");
const doReplies = !process.argv.includes("--no-reply");

function capital(textSound) {
  const arr = textSound.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str = arr.join(" ");
  return str;
}

const sessionDir = ".auth_info_baileys";

// simpan chats pada memory dan simpan pada file json
const logger = pino({ level: "trace" });

const CreateSession = async (io, sessionId) => {
  const { state, saveCreds: saveState } = await useMultiFileAuthState(
    sessionDir
  );

  const { version, isLatest } = await fetchLatestBaileysVersion();

  // nanti kita oprek kenapa sangaht banyak logger YGY

  const sock = makeWASocket({
    version,
    logger,
    // auth: state,
    auth: {
      creds: state.creds,
      /** caching makes the store faster to send/recv messages */
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    msgRetryCounterMap,
    generateHighQualityLinkPreview: true,
    // implement to handle retries
    // off penyimpanan
    // getMessage: async (key) => {
    //   if (store) {
    //     const msg = await store.loadMessage(key.remoteJid, key.id);
    //     return msg?.message || undefined;
    //   }

    //   // only if store is present
    //   return {
    //     conversation: "hello",
    //   };
    // },
  });

  sessions.set(sessionId, { ...sock, store: "store" });

  sock.ev.process(async (events) => {
    if (events["connection.update"]) {
      const update = events["connection.update"];
      const { connection, lastDisconnect } = update;

      // buat variable stauscode dan shouldreconnect di luar connection check
      const statusCode = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      if (connection === "close") {
        if (shouldReconnect) {
          // ignore sementara 440
          if (statusCode && statusCode !== 440) {
            console.log("reconnect");
            CreateSession(io, sessionId);
          }
        } else {
          // delete store
          deleteSession();
          io.emit("statusWA", {
            status: "Connection closed",
            message: `Kamu sudah tidak terhubung, refresh halaman untuk menerima QRCode`,
          });
        }
      }

      if (update.qr) {
        io.emit("statusWA", {
          status: "Scan",
          message: `QR code Diterima, Silakan Lakukan Scan`,
          qr: update.qr,
        });
      }

      if (update.isNewLogin) {
        io.emit("statusWA", {
          status: "Ready",
          message: `Selamat Datang, halaman akan di Refresh untuk menyelesaikan Proses`,
          info: sock.authState.creds,
          isNewLogin: true,
        });
      }

      if (update.isOnline) {
        io.emit("statusWA", {
          status: "Ready",
          message: `Whatsapp sudah bisa digunakan`,
          info: sock.authState.creds,
        });

        // await sock.sendMessage("6285694630595@s.whatsapp.net", { text: "p" });
      }

      // console.log("\x1b[36m%s\x1b[0m", update);
    }

    // credentials updated -- save them
    if (events["creds.update"]) {
      await saveState();
    }

    if (events.call) {
      console.log("recv call event", events.call);
    }

    // history received
    if (events["messaging-history.set"]) {
      const { chats, contacts, messages, isLatest } =
        events["messaging-history.set"];
      console.log(
        `recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest})`
      );
    }

    // messages updated like status delivered, message deleted etc.
    if (events["messages.update"]) {
      console.log(events["messages.update"]);
    }

    if (events["message-receipt.update"]) {
      console.log(events["message-receipt.update"]);
    }

    if (events["messages.reaction"]) {
      console.log(events["messages.reaction"]);
    }

    if (events["presence.update"]) {
      console.log(events["presence.update"]);
    }

    if (events["chats.update"]) {
      console.log(events["chats.update"]);
    }

    if (events["contacts.update"]) {
      for (const contact of events["contacts.update"]) {
        if (typeof contact.imgUrl !== "undefined") {
          const newUrl =
            contact.imgUrl === null
              ? null
              : await sock.profilePictureUrl(contact.id);
          console.log(`contact ${contact.id} has a new profile pic: ${newUrl}`);
        }
      }
    }

    if (events["chats.delete"]) {
      console.log("chats deleted ", events["chats.delete"]);
    }
  });

  sock.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type === "notify") {
      if (!messages[0].key.fromMe && doReplies) {
        //tentukan jenis pesan berbentuk text
        const oriMessage = messages[0].message.conversation;

        //tentukan jenis pesan apakah bentuk list
        const responseList = messages[0].message.listResponseMessage;

        //tentukan jenis pesan apakah bentuk button
        const responseButton = messages[0].message.buttonsResponseMessage;

        //nowa dari pengirim pesan sebagai id
        const noWa = messages[0].key.remoteJid;

        await sock.readMessages([messages[0].key]);

        //kecilkan semua pesan yang masuk lowercase
        const pesan = oriMessage.toLowerCase();

        if (pesan === "halo") {
          await sock.sendMessage(
            noWa,
            {
              text: "Halo, ini adalah layanan e-PPID Bawaslu Terintegrasi. Untuk Informasi lebih lanjut silakan kunjungi www.eppid.bawaslu.go.id",
            },
            { quoted: messages[0] }
          );
        }

        if (pesan === "duck") {
          await sock.sendMessage(
            noWa,
            {
              text: "Hai, ini layanan pesan Bot. Anda dapat melanjutkan contoh layanan dengan mengetik pilihan sebagai berikut\n\nbtn\nimg\nsound",
            },
            { quoted: messages[0] }
          );
        }

        if (pesan === "btn") {
          const buttons = [
            {
              buttonId: "id1",
              buttonText: { displayText: "Info 1!" },
              type: 1,
            },
            {
              buttonId: "id2",
              buttonText: { displayText: "Info 2!" },
              type: 1,
            },
            {
              buttonId: "id3",
              buttonText: { displayText: "Info 3" },
              type: 1,
            },
          ];
          const buttonMessage = {
            text: "Hai, ini layanan yang bisa kamu pilih",
            footer: "Duck",
            buttons: buttons,
            headerType: 1,
          };
          await sock.sendMessage(noWa, buttonMessage);
        }

        if (responseButton) {
          if (responseButton.selectedButtonId == "id1") {
            await sock.sendMessage(noWa, {
              text: "anda memilih ID tombol ke 1",
            });
          } else if (responseButton.selectedButtonId == "id2") {
            await sock.sendMessage(noWa, {
              text: "anda memilih ID tombol ke 2",
            });
          } else if (responseButton.selectedButtonId == "id3") {
            await sock.sendMessage(noWa, {
              text: "anda memilih ID tombol ke 3",
            });
          } else {
            await sock.sendMessage(noWa, {
              text: "Pesan tombol invalid",
            });
          }
        }

        if (pesan === "img") {
          await sock.sendMessage(noWa, {
            image: {
              url: "https://picsum.photos/200/300",
            },
            caption: "Duck",
          });
        }

        if (pesan === "sound") {
          const textsound = capital(
            "ini adalah pesan suara dari Robot Whastapp"
          );

          let API_URL =
            "https://texttospeech.responsivevoice.org/v1/text:synthesize?text=" +
            textsound +
            "&lang=id&engine=g3&name=&pitch=0.5&rate=0.5&volume=1&key=0POmS5Y2&gender=male";
          var file = createWriteStream("./sound.mp3");
          const request = https.get(API_URL, async function (response) {
            await response.pipe(file);
            response.on("end", async function () {
              await sock.sendMessage(noWa, {
                audio: {
                  url: "sound.mp3",
                  caption: textsound,
                },
                mimetype: "audio/mp4",
              });
            });
          });
        }
      }
    }
  });

  return sock;
};

const deleteSession = () => {
  rmSync(sessionDir, { force: true, recursive: true });
  sessions.delete(sessionName);
};

const isSessionExists = () => {
  return sessions.has(sessionName);
};

const getSession = () => {
  return sessions.get(sessionName) ?? null;
};

const formatPhone = (phone) => {
  let formatted = phone.replace(/\D/g, "");

  // Menghilangkan angka 0 di depan diganti dengan 62
  if (formatted.startsWith("0")) {
    formatted = "62" + formatted.substr(1);
  }
  // handle jika dimulai langsung dari angka 8 bukan nol (input number)
  if (formatted.startsWith("8")) {
    formatted = "62" + formatted;
  }

  if (!formatted.endsWith("@s.whatsapp.net")) {
    formatted = formatted + "@s.whatsapp.net";
  }

  return formatted;
};

const isExists = async (session, jid, isGroup = false) => {
  try {
    let result;

    if (isGroup) {
      result = await session.groupMetadata(jid);

      return Boolean(result.id);
    }

    [result] = await session.onWhatsApp(jid);

    return result.exists;
  } catch {
    return false;
  }
};

const sendMessage = async (session, receiver, message, delayMs = 1000) => {
  try {
    await delay(parseInt(delayMs));

    console.log(receiver, message);

    return await session.sendMessage(receiver, { text: message });
  } catch (e) {
    return Promise.reject(null); // eslint-disable-line prefer-promise-reject-errors
  }
};

const init = (io) => {
  CreateSession(io, sessionName);
};

const prepareAndSendMessage = async (receiver, msg, delayMs = 1000) => {
  try {
    const cekIsSessionExists = isSessionExists();
    const cekGetSession = getSession();
    const cekFormatPhone = formatPhone(receiver);
    const cekIsExists = await isExists(cekGetSession, cekFormatPhone);

    if (!cekIsSessionExists) throw new Error("Whatsapp Tidak Dapat Digunakan");
    if (!cekIsExists) throw new Error("Whatsapp Tidak Dapat Digunakan");

    return await sendMessage(cekFormatPhone, { text: msg });
  } catch (error) {
    getLogger.error(error);
    throw new Error("Whatsapp Tidak Terkirim");
  }
};

export {
  init,
  isSessionExists,
  getSession,
  formatPhone,
  isExists,
  sendMessage,
  prepareAndSendMessage,
};
