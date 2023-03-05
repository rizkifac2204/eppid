import PublicHandler from "middlewares/PublicHandler";
import getLogger from "middlewares/getLogger";

export default PublicHandler().get(async (req, res) => {
  getLogger.error("c opened");
  res.json({ message: "sap" });
});
