import db from "libs/db";
import Handler from "middlewares/Handler";
import sendingMail, { mailOption, TextPerubahanStatus } from "services/Email";
import { DeleteUpload } from "services/UploadService";
import getLogger from "middlewares/getLogger";

export default Handler()
  .get(async (req, res) => {
    try {
      const { id, respon_id } = req.query;
      const data = await db
        .select(
          `permohonan_respon.*`,
          `permohonan_respon_tolak.id as tolak_id`,
          `permohonan_respon_tolak.tanggal_ditolak`,
          `permohonan_respon_tolak.dasar_pengecualian`,
          `permohonan_respon_tolak.pada_pasal`,
          `permohonan_respon_tolak.ket_konsekuensi`
        )
        .from("permohonan_respon")
        .leftJoin(
          `permohonan_respon_tolak`,
          `permohonan_respon.id`,
          `permohonan_respon_tolak.respon_id`
        )
        .where({ "permohonan_respon.id": respon_id })
        .first();

      res.json(data);
    } catch (error) {
      getLogger.error(error);
      res.status(500).json({ message: "Terjadi Kesalahan..." });
    }
  })
  .put(async (req, res) => {
    const { id, respon_id } = req.query;
    const dataRespon = await db
      .select("pesan", "mailed")
      .from("permohonan_respon")
      .where({ "permohonan_respon.id": respon_id })
      .first();

    const dataPermohonan = await db
      .select("tiket", "email_pemohon", "status_permohonan", "no_registrasi")
      .from("permohonan")
      .where("id", id)
      .first();

    try {
      // setting email
      const setMailOption = mailOption(
        dataPermohonan.email_pemohon,
        "Perubahan Status Permohonan Informasi",
        TextPerubahanStatus(
          dataPermohonan.tiket,
          dataPermohonan.email_pemohon,
          dataPermohonan.status_permohonan,
          dataPermohonan.no_registrasi,
          dataRespon.pesan
        )
      );

      await sendingMail(setMailOption).then(async (resolve) => {
        if (!resolve) {
          return res
            .status(400)
            .json({ message: "Gagal Mengirim Ulang Email" });
        } else {
          if (dataRespon.mailed == 0) {
            await db("permohonan_respon").where("id", respon_id).update({
              mailed: 1,
            });
          }
          return res.json({
            message: "Berhasil Mengirim Ulang Email",
            type: "success",
          });
        }
      });
    } catch (err) {
      getLogger.error(err);
      return res.status(400).json({ message: "Gagal Mengirim Ulang" });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id, respon_id } = req.query;

      const cek = await db
        .from("permohonan_respon")
        .where("id", respon_id)
        .first();
      DeleteUpload("./public/response", cek.file_informasi);
      DeleteUpload("./public/pemberitahuan", cek.file_surat_pemberitahuan);

      const proses = await db("permohonan_respon").where("id", respon_id).del();
      if (!proses) return res.status(400).json({ message: "Gagal Hapus" });
      res.json({ message: "Berhasil Hapus", type: "success" });
    } catch (error) {
      getLogger.error(error);
      res.status(500).json({ message: "Terjadi Kesalahan..." });
    }
  });
