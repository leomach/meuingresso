import { Router } from "express";
import { dbPromise } from "../database/db.js";

export const filmesRouter = Router();

filmesRouter.get("/", async (req, res) => {
    const db = await dbPromise
    const filmesDB = await db.all("SELECT * FROM filmes");
    return res.json({ filmes: filmesDB });
});

filmesRouter.post("/", async (req, res) => {
    const { img, titulo, descricao, ano, direcao, genero, valor } = req.body;
    const db = await dbPromise
    await db.run(`
        INSERT INTO filmes (img, titulo, descricao, ano, direcao, genero, valor) VALUES (?, ?, ?, ?, ?, ?, ?);
    `, [
        img,
        titulo,
        descricao,
        ano,
        direcao,
        genero,
        valor
    ]);
    return res.json({ message: "Filme adicionado com sucesso" });
})