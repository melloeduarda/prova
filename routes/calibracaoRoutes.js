import { Router } from "express";
import {
  cadastrar,
  listar,
  listarDetalhadas,
  buscarPorId,
  atualizar,
  excluir
} from "../controller/calibracaoController.js";

const router = Router();

router.post("calibracao/", cadastrar);
router.get("calibracao/", listar);
router.get("calibracao/detalhadas", listarDetalhadas);
router.get("calibracao/:id", buscarPorId);
router.patch("calibracao/:id", atualizar);
router.delete("calibracao/:id", excluir);

export default router;
