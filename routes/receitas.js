import express from 'express'
import salvaReceita, { retornaReceitas, RetornaReceitasID } from '../controllers/receitaController.js';
import { formAdicionaReceita } from '../controllers/receitaController.js';

const router = express.Router()

router.post("/salvaReceitas",salvaReceita)
router.get("/detalhes/:id",RetornaReceitasID)
router.get("/adicionaReceita",formAdicionaReceita)

export default router;