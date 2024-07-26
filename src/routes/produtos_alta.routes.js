
import express from 'express';
import * as produtoAltaController from '../controller/produto_alta.controller.js';

const router = express.Router();

router.get('/getAll', produtoAltaController.getAll);
export default router;
