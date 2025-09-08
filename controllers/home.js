import { retornaReceitas } from "./receitaController.js"

export default async function home(req,res) {
    const data = await retornaReceitas()
    return res.render('index',{data:data})
}

