"use strict";
(() => {
var exports = {};
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 3790:
/***/ ((module) => {

module.exports = require("@adiwajshing/baileys");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 3952:
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ 7773:
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ 767:
/***/ ((module) => {

module.exports = require("winston-daily-rotate-file");

/***/ }),

/***/ 9369:
/***/ ((module) => {

module.exports = import("jose");;

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 5616:
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 6929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var middlewares_Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9733);
/* harmony import */ var middlewares_getLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4383);
/* harmony import */ var libs_whatsapp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([middlewares_Handler__WEBPACK_IMPORTED_MODULE_0__]);
middlewares_Handler__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const { Server  } = __webpack_require__(3952);
const onConnection = (socket)=>{
    socket.emit("statusWA", {
        status: "Check",
        message: `Memeriksa Status`
    });
    (0,libs_whatsapp__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(socket);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,middlewares_Handler__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)().get(async (req, res)=>{
    try {
        if (res.socket.server.io) {
            console.log("Socked Already Connected");
        } else {
            console.log("initializing...");
            const io = new Server(res.socket.server);
            res.socket.server.io = io;
            io.on("connection", onConnection);
        }
        return res.json({
            message: "setting up"
        });
    } catch (err) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(err);
        return res.status(400).json({
            message: "Terjadi Kesalahan Sistem"
        });
    }
}).post(async (req, res)=>{
    try {
        let { number , message  } = req.body;
        console.log(req.body);
        if (!number) return res.status(400).json({
            status: true,
            type: "error",
            message: "Nomor HP Tidak Terdeteksi"
        });
        if (!message) return res.status(400).json({
            status: true,
            type: "error",
            message: "Pesan Tidak Boleh Kosong"
        });
        const isWa = (0,libs_whatsapp__WEBPACK_IMPORTED_MODULE_2__/* .isSessionExists */ .t5)();
        const session = (0,libs_whatsapp__WEBPACK_IMPORTED_MODULE_2__/* .getSession */ .Gg)();
        const formated = (0,libs_whatsapp__WEBPACK_IMPORTED_MODULE_2__/* .formatPhone */ .CN)(number);
        const exists = await (0,libs_whatsapp__WEBPACK_IMPORTED_MODULE_2__/* .isExists */ .hV)(session, formated);
        console.log(isWa, session, formated, exists);
        if (!number && !message) return res.status(400).json({
            message: `Mohon isi nomor dan pesan`,
            type: "error"
        });
        if (!isWa) return res.status(400).json({
            status: true,
            type: "error",
            message: "Whatsapp Tidak Dapat Digunakan"
        });
        if (!exists) return res.status(400).json({
            status: true,
            type: "error",
            message: "Nomor HP Tidak Tedaftar Whatsapp"
        });
        const sending = await (0,libs_whatsapp__WEBPACK_IMPORTED_MODULE_2__/* .sendMessage */ .bG)(session, formated, message, 0);
        if (sending) {
            return res.json({
                status: true,
                type: "success",
                message: "Mengirim Pesan Whatsapp"
            });
        } else {
            return res.json({
                status: true,
                type: "error",
                message: "Gagal Mengirim Pesan Whatsapp"
            });
        }
    } catch (err) {
        middlewares_getLogger__WEBPACK_IMPORTED_MODULE_1__/* ["default"].error */ .Z.error(err);
        console.log(err);
        return res.status(400).json({
            message: "Terjadi Kesalahan Sistem"
        });
    }
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CN": () => (/* binding */ formatPhone),
  "Gg": () => (/* binding */ getSession),
  "S1": () => (/* binding */ init),
  "hV": () => (/* binding */ isExists),
  "t5": () => (/* binding */ isSessionExists),
  "bG": () => (/* binding */ sendMessage)
});

// UNUSED EXPORTS: prepareAndSendMessage

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
// EXTERNAL MODULE: ./src/middlewares/getLogger.js
var middlewares_getLogger = __webpack_require__(4383);
;// CONCATENATED MODULE: external "pino"
const external_pino_namespaceObject = require("pino");
var external_pino_default = /*#__PURE__*/__webpack_require__.n(external_pino_namespaceObject);
;// CONCATENATED MODULE: ./src/libs/whatsapp.js



const https = __webpack_require__(5687);
const { default: makeWASocket , DisconnectReason , useMultiFileAuthState , fetchLatestBaileysVersion , delay , makeCacheableSignalKeyStore  } = __webpack_require__(3790);
const msgRetryCounterMap = {};
const sessionName = "mainId";
const sessions = new Map();
// const useStore = !process.argv.includes("--no-store");
const doReplies = !process.argv.includes("--no-reply");
function capital(textSound) {
    const arr = textSound.split(" ");
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str = arr.join(" ");
    return str;
}
const sessionDir = ".auth_info_baileys";
// simpan chats pada memory dan simpan pada file json
const logger = external_pino_default()({
    level: "trace"
});
const CreateSession = async (io, sessionId)=>{
    const { state , saveCreds: saveState  } = await useMultiFileAuthState(sessionDir);
    const { version , isLatest  } = await fetchLatestBaileysVersion();
    // nanti kita oprek kenapa sangaht banyak logger YGY
    const sock = makeWASocket({
        version,
        logger,
        // auth: state,
        auth: {
            creds: state.creds,
            /** caching makes the store faster to send/recv messages */ keys: makeCacheableSignalKeyStore(state.keys, logger)
        },
        msgRetryCounterMap,
        generateHighQualityLinkPreview: true
    });
    sessions.set(sessionId, {
        ...sock,
        store: "store"
    });
    sock.ev.process(async (events)=>{
        if (events["connection.update"]) {
            const update = events["connection.update"];
            const { connection , lastDisconnect  } = update;
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
                        message: `Kamu sudah tidak terhubung, refresh halaman untuk menerima QRCode`
                    });
                }
            }
            if (update.qr) {
                io.emit("statusWA", {
                    status: "Scan",
                    message: `QR code Diterima, Silakan Lakukan Scan`,
                    qr: update.qr
                });
            }
            if (update.isNewLogin) {
                io.emit("statusWA", {
                    status: "Ready",
                    message: `Selamat Datang, halaman akan di Refresh untuk menyelesaikan Proses`,
                    info: sock.authState.creds,
                    isNewLogin: true
                });
            }
            if (update.isOnline) {
                io.emit("statusWA", {
                    status: "Ready",
                    message: `Whatsapp sudah bisa digunakan`,
                    info: sock.authState.creds
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
            const { chats , contacts , messages , isLatest  } = events["messaging-history.set"];
            console.log(`recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest})`);
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
            for (const contact of events["contacts.update"]){
                if (typeof contact.imgUrl !== "undefined") {
                    const newUrl = contact.imgUrl === null ? null : await sock.profilePictureUrl(contact.id);
                    console.log(`contact ${contact.id} has a new profile pic: ${newUrl}`);
                }
            }
        }
        if (events["chats.delete"]) {
            console.log("chats deleted ", events["chats.delete"]);
        }
    });
    sock.ev.on("messages.upsert", async ({ messages , type  })=>{
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
                await sock.readMessages([
                    messages[0].key
                ]);
                //kecilkan semua pesan yang masuk lowercase
                const pesan = oriMessage.toLowerCase();
                if (pesan === "halo") {
                    await sock.sendMessage(noWa, {
                        text: "Halo, ini adalah layanan e-PPID Bawaslu Terintegrasi. Untuk Informasi lebih lanjut silakan kunjungi www.eppid.bawaslu.go.id"
                    }, {
                        quoted: messages[0]
                    });
                }
                if (pesan === "duck") {
                    await sock.sendMessage(noWa, {
                        text: "Hai, ini layanan pesan Bot. Anda dapat melanjutkan contoh layanan dengan mengetik pilihan sebagai berikut\n\nbtn\nimg\nsound"
                    }, {
                        quoted: messages[0]
                    });
                }
                if (pesan === "btn") {
                    const buttons = [
                        {
                            buttonId: "id1",
                            buttonText: {
                                displayText: "Info 1!"
                            },
                            type: 1
                        },
                        {
                            buttonId: "id2",
                            buttonText: {
                                displayText: "Info 2!"
                            },
                            type: 1
                        },
                        {
                            buttonId: "id3",
                            buttonText: {
                                displayText: "Info 3"
                            },
                            type: 1
                        }
                    ];
                    const buttonMessage = {
                        text: "Hai, ini layanan yang bisa kamu pilih",
                        footer: "Duck",
                        buttons: buttons,
                        headerType: 1
                    };
                    await sock.sendMessage(noWa, buttonMessage);
                }
                if (responseButton) {
                    if (responseButton.selectedButtonId == "id1") {
                        await sock.sendMessage(noWa, {
                            text: "anda memilih ID tombol ke 1"
                        });
                    } else if (responseButton.selectedButtonId == "id2") {
                        await sock.sendMessage(noWa, {
                            text: "anda memilih ID tombol ke 2"
                        });
                    } else if (responseButton.selectedButtonId == "id3") {
                        await sock.sendMessage(noWa, {
                            text: "anda memilih ID tombol ke 3"
                        });
                    } else {
                        await sock.sendMessage(noWa, {
                            text: "Pesan tombol invalid"
                        });
                    }
                }
                if (pesan === "img") {
                    await sock.sendMessage(noWa, {
                        image: {
                            url: "https://picsum.photos/200/300"
                        },
                        caption: "Duck"
                    });
                }
                if (pesan === "sound") {
                    const textsound = capital("ini adalah pesan suara dari Robot Whastapp");
                    let API_URL = "https://texttospeech.responsivevoice.org/v1/text:synthesize?text=" + textsound + "&lang=id&engine=g3&name=&pitch=0.5&rate=0.5&volume=1&key=0POmS5Y2&gender=male";
                    var file = (0,external_fs_.createWriteStream)("./sound.mp3");
                    const request = https.get(API_URL, async function(response) {
                        await response.pipe(file);
                        response.on("end", async function() {
                            await sock.sendMessage(noWa, {
                                audio: {
                                    url: "sound.mp3",
                                    caption: textsound
                                },
                                mimetype: "audio/mp4"
                            });
                        });
                    });
                }
            }
        }
    });
    return sock;
};
const deleteSession = ()=>{
    (0,external_fs_.rmSync)(sessionDir, {
        force: true,
        recursive: true
    });
    sessions.delete(sessionName);
};
const isSessionExists = ()=>{
    return sessions.has(sessionName);
};
const getSession = ()=>{
    return sessions.get(sessionName) ?? null;
};
const formatPhone = (phone)=>{
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
const isExists = async (session, jid, isGroup = false)=>{
    try {
        let result;
        if (isGroup) {
            result = await session.groupMetadata(jid);
            return Boolean(result.id);
        }
        [result] = await session.onWhatsApp(jid);
        return result.exists;
    } catch  {
        return false;
    }
};
const sendMessage = async (session, receiver, message, delayMs = 1000)=>{
    try {
        await delay(parseInt(delayMs));
        console.log(receiver, message);
        return await session.sendMessage(receiver, {
            text: message
        });
    } catch (e) {
        return Promise.reject(null); // eslint-disable-line prefer-promise-reject-errors
    }
};
const init = (io)=>{
    CreateSession(io, sessionName);
};
const prepareAndSendMessage = async (receiver, msg, delayMs = 1000)=>{
    try {
        const cekIsSessionExists = isSessionExists();
        const cekGetSession = getSession();
        const cekFormatPhone = formatPhone(receiver);
        const cekIsExists = await isExists(cekGetSession, cekFormatPhone);
        if (!cekIsSessionExists) throw new Error("Whatsapp Tidak Dapat Digunakan");
        if (!cekIsExists) throw new Error("Whatsapp Tidak Dapat Digunakan");
        return await sendMessage(cekFormatPhone, {
            text: msg
        });
    } catch (error) {
        getLogger.error(error);
        throw new Error("Whatsapp Tidak Terkirim");
    }
};



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4383,1820,9733], () => (__webpack_exec__(6929)));
module.exports = __webpack_exports__;

})();