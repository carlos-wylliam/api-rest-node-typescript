import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController } from "./../controllers";

const router = Router();

router.get("/", (_, res) => {
  return res.status(StatusCodes.OK).send("Olá, Dev!")
});

router.post("/cidades", 
CidadesController.createBodyValidator,
CidadesController.createQueryValidator,
CidadesController.create,
)

export { router };