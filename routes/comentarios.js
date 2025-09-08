import express from 'express'
import salvaComentarios, { retornaComentarios } from '../controllers/comentariosController.js';

const router = express.Router()

router.put("/salvaComentarios",salvaComentarios)
router.get("/retornaComentarios",retornaComentarios)

export default router;