import { retornaReceitas } from "./receitaController.js";

export default async function home(req, res) {
  const page = parseInt(req.query.page) || 1;
  const data = await retornaReceitas(page, 6);
  return res.render("index", { data });
}
