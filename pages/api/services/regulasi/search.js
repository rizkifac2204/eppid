import db from "libs/db";
import PublicHandler from "middlewares/PublicHandler";

export default PublicHandler().get(async (req, res) => {
  const { kategori_id, kategori, judul, tentang, berkas } = req.query;
  const data = await db
    .select(`regulasi.*`, `regulasi_kategori.kategori`)
    .from("regulasi")
    .innerJoin(
      "regulasi_kategori",
      "regulasi.kategori_id",
      "regulasi_kategori.id"
    )
    .where((builder) => {
      builder.where(true);
      if (kategori_id)
        builder.andWhere("regulasi.kategori_id", "=", kategori_id);
      if (kategori)
        builder.andWhere("regulasi_kategori.kategori", "like", `%${kategori}%`);
      if (judul) builder.andWhere("regulasi.judul", "like", `%${judul}%`);
      if (tentang) builder.andWhere("regulasi.tentang", "like", `%${tentang}%`);
      if (berkas) builder.andWhere("regulasi.berkas", "like", `%${berkas}%`);
    })
    .orderBy("regulasi.kategori_id", "asc")
    .orderBy("regulasi.nomor", "asc");

  if (data.length === 0) return res.status(200).json([]);

  const domain =
    process.env.NODE_ENV === "development"
      ? process.env.HOST + ":" + process.env.PORT
      : process.env.HOST;

  const result = data.map((v) => ({
    ...v,
    berkas_url: `${domain}/api/services/file/public/regulasi/${v.berkas}`,
  }));

  res.json({
    count: result.length,
    result: result,
  });
});
