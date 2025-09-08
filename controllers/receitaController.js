import modelReceita from "../models/receita.js"



export default async function salvaReceita(req,res){
    const receita = new modelReceita({
        titulo: req.body.titulo,
        ingredientes:req.body.ingredientes,
        instrucoes:req.body.instrucoes,
        autor:req.body.autor,
        categoria:req.body.categoria,
        dataCriacao:new Date(req.body.dataCriacao),
        comentarios:req.body.comentarios
        });
        await receita.save()
    return res.status(201).json({mensagem:"Receita salva com sucesso"})
}

export async function retornaReceitas(req,res) {
    return await modelReceita.find({})
}

export async function RetornaReceitasID(req,res) {
    const receita = await modelReceita.findById(req.params.id)
    return res.render('detalhes',{data:[receita]})
}

export async function formAdicionaReceita(req,res) {
    return res.render('adicionaReceita')
}


