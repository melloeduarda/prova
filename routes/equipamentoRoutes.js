import { Router } from "express";
import {
  cadastrar,
  listar,
  buscarPorId,
  atualizar,
  excluir
} from "../controller/equipamentoController.js";

const router = Router();

router.post("equipaemnto/", cadastrar);
router.get("equipamento/", listar);
router.get("equipamento/:id", buscarPorId);
router.patch("equipamento/:id", atualizar);
router.delete("equipamento/:id", excluir);

export default router;
