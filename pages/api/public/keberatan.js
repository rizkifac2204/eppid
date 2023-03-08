import db from "libs/db";
import PublicHandler from "middlewares/PublicHandler";
import sendingMail, {
  mailOption,
  TextKeberatanKepadaAdmin,
  TextKeberatanKepadaPemohon,
} from "services/Email";
import { buatCurTime, emailAdmin } from "middlewares/PublicCondition";
import getLogger from "middlewares/getLogger";

export default PublicHandler()
  .get(async (req, res) => {
    try {
      const { nomor } = req.query;

      const data = await db
        .select(
          "permohonan.*",
          "bawaslu.nama_bawaslu",
          "bawaslu.email_bawaslu",
          "bawaslu.telp_bawaslu",
          "bawaslu.alamat_bawaslu",
          "bawaslu.kota_bawaslu",
          "pemohon.nama_pemohon",
          "pemohon.alamat_pemohon",
          "pemohon.pekerjaan_pemohon",
          "pemohon.telp_pemohon"
        )
        .from("permohonan")
        .innerJoin(
          "pemohon",
          "pemohon.email_pemohon",
          "permohonan.email_pemohon"
        )
        .leftJoin("bawaslu", "bawaslu.id", "permohonan.bawaslu_id")
        .where("permohonan.no_registrasi", nomor)
        .orWhere("permohonan.tiket", nomor)
        .whereNull("permohonan.deleted_at")
        .first();

      if (!data) return res.status(404).json({ message: "Tidak Ditemukan" });
      res.json(data);
    } catch (error) {
      getLogger.error(error);
      res.status(500).json({ message: "Terjadi Kesalahan..." });
    }
  })
  .post(async (req, res) => {
    const {
      id,
      no_registrasi,
      tiket,
      email_pemohon,
      email_bawaslu,
      nama_bawaslu,
      alasan_a,
      alasan_b,
      alasan_c,
      alasan_d,
      alasan_e,
      alasan_f,
      alasan_g,
      kasus_posisi,
    } = req.body;
    const curtime = buatCurTime();

    // setting email untuk pemohon
    const setMailOptionPemohon = mailOption(
      email_pemohon,
      "Pengajuan Keberatan PPID Bawaslu",
      TextKeberatanKepadaPemohon(no_registrasi, tiket)
    );

    // setting email untuk admin
    const emailadmintujuan = emailAdmin(nama_bawaslu, email_bawaslu);
    const setMailOptionAdmin = mailOption(
      emailadmintujuan,
      "Pengajuan Keberatan Permohonan Informasi Baru",
      TextKeberatanKepadaAdmin(no_registrasi, email_pemohon, tiket)
    );

    const dataForInsert = {
      permohonan_id: id,
      alasan_a: alasan_a ? 1 : 0,
      alasan_b: alasan_b ? 1 : 0,
      alasan_c: alasan_c ? 1 : 0,
      alasan_d: alasan_d ? 1 : 0,
      alasan_e: alasan_e ? 1 : 0,
      alasan_f: alasan_f ? 1 : 0,
      alasan_g: alasan_g ? 1 : 0,
      kasus_posisi,
      tanggal_keberatan: curtime,
    };

    // proses simpan
    try {
      const proses = await db("permohonan_keberatan").insert(dataForInsert);

      // failed
      if (!proses) {
        return res.status(400).json({
          message: "Gagal Mengajukan Keberatan",
        });
      }

      await sendingMail(setMailOptionPemohon);
      await sendingMail(setMailOptionAdmin);

      // success
      res.json({
        message: "Berhasil Mengajukan Keberatan",
        currentData: dataForInsert,
        type: "success",
      });
    } catch (error) {
      getLogger.error(error);
      return res.status(400).json({
        message: "Gagal Mengajukan Keberatan",
      });
    }
  });
