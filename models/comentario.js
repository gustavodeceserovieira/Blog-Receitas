import { mongoose,Schema, model } from 'mongoose';

const modelComentario = new Schema({
    texto:{type:String},
    autor: {type:String},
    dataCriacao: {type:Date},
    receita: { type: mongoose.Schema.Types.ObjectId, ref: "receita",required:true}
});

export default model('comentario', modelComentario);