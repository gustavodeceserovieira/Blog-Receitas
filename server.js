import express from 'express'
import dotenv from 'dotenv'
import routesHome from  './routes/home.js'
import getConexao from './bd/bd.js'
import routesReceitas from './routes/receitas.js'
import routesComentarios from './routes/comentarios.js'
dotenv.config()
const app = express();
const bd = getConexao()


app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routesHome)
app.use(routesReceitas)
app.use(routesComentarios)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


