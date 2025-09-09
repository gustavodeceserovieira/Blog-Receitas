import modelReceita from "../models/receita.js"
import modelComentarios from "../models/comentario.js"


export default async function salvaReceita(req,res){
    const receita = new modelReceita({
        titulo: req.body.titulo,
        ingredientes:req.body.ingredientes,
        instrucoes:req.body.instrucoes,
        autor:req.body.autor,
        categoria:req.body.categoria,
        dataCriacao:new Date(),
        comentarios:req.body.comentarios
        });

        await receita.save()
    return res.redirect("/")
}

export async function retornaReceitas(req,res) {
    return await modelReceita.find({})
}

export async function RetornaReceitasID(req,res) {
    const receita = await modelReceita.findById(req.params.id)
    const comentarios = await modelComentarios.find({receita :req.params.id})
    const id = receita['id']
    return res.render('detalhes',{data:[receita],data1:comentarios,id})
}

export async function formAdicionaReceita(req,res) {
    return res.render('adicionaReceita')
}


