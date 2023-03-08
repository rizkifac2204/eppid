import db from "libs/db";
import PublicHandler from "middlewares/PublicHandler";
import { UploadPublic, DeleteUpload } from "services/UploadService";
import {
  buatTiket,
  buatCurTime,
  buatIDWill,
  emailAdmin,
} from "middlewares/PublicCondition";
import sendingMail, {
  mailOption,
  TextPermohonanBaruKepadaAdmin,
  TextPermohonanBaruKepadaPemohon,
} from "services/Email";
const fs = require("fs");
// const sharp = require("sharp");
import getLogger from "middlewares/getLogger";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default PublicHandler().post(
  UploadPublic().single("file"),
  async (req, res) => {
    try {
      // jika tidak ada identitas atau jika ada nama tapi tidak ada file
      if (!req.file) {
        if (!req.body.identitas_pemohon)
          return res.status(400).json({
            message: "File Identitas Tidak Ditemukan atau Tidak Sesuai",
            type: "error",
          });

        if (!fs.existsSync("./public/upload/" + req.body.identitas_pemohon))
          return res.status(400).json({
            message: "File identitas Harus Upload Ulang",
            type: "error",
          });
      }

      const filename = req.file
        ? req.file.filename
        : req.body.identitas_pemohon;
      const {
        kepada,
        id_prov,
        id_kabkota,
        email_pemohon,
        nama_pemohon,
        telp_pemohon,
        pekerjaan_pemohon,
        pendidikan_pemohon,
        alamat_pemohon,
        rincian,
        tujuan,
        cara_terima,
        cara_dapat,
      } = req.body;

      const platform = "Website";
      const status_permohonan = "Proses";
      const tiket = buatTiket(6, kepada, id_prov, id_kabkota);
      const tanggal_permohonan = buatCurTime();
      const bawaslu_id = buatIDWill(kepada, id_prov, id_kabkota);
      const dataForInsertPermohonan = {
        bawaslu_id,
        email_pemohon,
        tiket,
        tanggal_permohonan,
        platform,
        rincian,
        tujuan,
        cara_terima,
        cara_dapat,
        status_permohonan,
      };
      const dataForInsertPemohon = {
        email_pemohon,
        nama_pemohon,
        telp_pemohon,
        pekerjaan_pemohon,
        pendidikan_pemohon,
        alamat_pemohon,
        identitas_pemohon: filename,
      };

      // setting email untuk admin
      const getEmailBawaslu = await db("bawaslu")
        .where("id", bawaslu_id)
        .first();
      const emailadmintujuan = emailAdmin(
        kepada,
        getEmailBawaslu.email_bawaslu
      );
      const setMailOptionAdmin = mailOption(
        emailadmintujuan,
        "Permohonan Informasi Baru",
        TextPermohonanBaruKepadaAdmin(tiket, email_pemohon)
      );
      // setting email untuk pemohon
      const setMailOptionPemohon = mailOption(
        email_pemohon,
        "Permohonan Informasi PPID Bawaslu",
        TextPermohonanBaruKepadaPemohon(tiket, email_pemohon)
      );

      // proses simpan data pemohon
      const cekDataPemohon = await db("pemohon")
        .where({ email_pemohon: email_pemohon })
        .first();
      if (cekDataPemohon) {
        // proses update
        const update = await db("pemohon")
          .where({ email_pemohon: email_pemohon })
          .update({
            nama_pemohon,
            telp_pemohon,
            pekerjaan_pemohon,
            pendidikan_pemohon,
            alamat_pemohon,
            identitas_pemohon: filename,
          });
        // failed
        if (!update) {
          // gagal update hapus file baru
          if (req.file) DeleteUpload(req.file.destination, filename);
          return res.status(400).json({
            message: "Gagal Proses Input Pemohon",
          });
        }
        // berhasil update hapus file lama jika upload
        if (req.file)
          DeleteUpload(req.file.destination, cekDataPemohon.identitas_pemohon);
      } else {
        // proses simpan
        const simpan = await db("pemohon").insert(dataForInsertPemohon);
        // failed
        if (!simpan) {
          // batal simpan
          if (req.file) DeleteUpload(req.file.destination, filename);
          return res.status(400).json({
            message: "Gagal Menyimpan Data Pemohon",
          });
        }
      }

      // prepare data for callback
      const currentData = {
        ...dataForInsertPermohonan,
        ...dataForInsertPemohon,
      };

      // proses simpan
      const proses = await db("permohonan").insert(dataForInsertPermohonan);
      // failed
      if (!proses) {
        return res.status(400).json({
          message: "Gagal Mengirim Permohonan",
        });
      }

      await sendingMail(setMailOptionAdmin);
      await sendingMail(setMailOptionPemohon);

      // success
      res.json({
        message: "Berhasil Mengirim Permohonan",
        currentData,
        type: "success",
      });
    } catch (error) {
      getLogger.error(error);
      return res.status(400).json({
        message: "Gagal Mengirim Permohonan Informasi, Kesalahan Server",
      });
    }
  }
);
