import modelComentario from "../models/comentario.js"
import modelReceita from "../models/receita.js"


export default async function salvaComentarios(req,res){
    const comentario = new modelComentario({
        texto:req.body.texto,
        autor: req.body.autor,
        dataCriacao: new Date(),
        receita: req.params.id ,
    });
        const comentarioSalvo = await comentario.save()
        await modelReceita.findByIdAndUpdate(
            req.params.id,
            { $push: { comentarios: comentarioSalvo._id } }
        );
        await modelReceita.findById(req.params.id).populate("comentarios");
    return res.redirect(`/detalhes/${req.params.id}`)
}

export async function retornaComentarios(req,res) {
    const comentarios = await modelComentario.find({})
}

