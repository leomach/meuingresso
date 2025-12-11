import { open } from "sqlite";
import sqlite3 from "sqlite3";

export const dbPromise = await open({
    filename: "./filmes.db",
    driver: sqlite3.Database,
});

async function criarTabela() {
    await dbPromise.run(`
        CREATE TABLE IF NOT EXISTS filmes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        img TEXT,
        titulo TEXT,
        descricao TEXT,
        ano INTEGER,
        direcao TEXT,
        genero TEXT,
        valor TEXT);
    `);
}

criarTabela().then(() => {
    console.log("Tabela criada com sucesso");
});