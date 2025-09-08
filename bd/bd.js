import { connect, Schema, model } from 'mongoose';
 
export default async function getConexao(){
    connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error(err));
}
