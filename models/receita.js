import { Schema, model } from 'mongoose';

const modelReceita = new Schema({
  titulo: {type:String},
  ingredientes:{type:[String]},
  instrucoes:{type:String},
  autor:{type:String},
  categoria:{type:String},
  dataCriacao:{type:Date},
   comentarios: [{ type: Schema.Types.ObjectId, ref: "comentario",required:true}]
});

export default model('receita', modelReceita);