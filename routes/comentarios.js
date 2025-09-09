import express from 'express'
import salvaComentarios, { retornaComentarios } from '../controllers/comentariosController.js';

const router = express.Router()

router.post("/salvaComentarios/:id",salvaComentarios)
router.get("/retornaComentarios",retornaComentarios)

export default router;