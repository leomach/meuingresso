import { Router } from "express";

export const apiRouter = Router();

apiRouter.get("/api", (req, res) => {
  return res.json({ message: "Servidor ativo" });
});