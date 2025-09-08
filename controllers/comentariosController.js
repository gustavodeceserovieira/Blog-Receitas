import modelComentario from "../models/comentario.js"
import modelReceita from "../models/receita.js"


export default async function salvaComentarios(req,res){
    const comentario = new modelComentario({
        texto:req.body.texto,
        autor: req.body.autor,
        dataCriacao: new Date(req.body.dataCriacao),
        receita: req.body.receita ,
    });
        const comentarioSalvo = await comentario.save()
        await modelReceita.findByIdAndUpdate(
            req.body.receita,
            { $push: { comentarios: comentarioSalvo._id } }
        );
        const receita = await modelReceita.findById(req.body.receita).populate("comentarios");
    return res.status(201).json({mensagem:"Comentário salvo com sucesso"})
}

export async function retornaComentarios(req,res) {
    const comentarios = await modelComentario.find({})
    res.json({comentarios:comentarios})
}

