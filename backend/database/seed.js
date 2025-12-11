import { dbPromise } from "./db.js";
import { filmes } from "../index.js";

async function alimentarTabela(listaDeFilmes) {
    const db = await dbPromise

    for (const filme of listaDeFilmes) {
        await db.run(`
            INSERT INTO filmes (
                img,
                titulo,
                descricao,
                ano,
                direcao,
                genero,
                valor
            ) VALUES (?, ?, ?, ?, ?, ?, ?);
        `, [
            filme.img,
            filme.titulo,
            filme.descricao,
            filme.ano,
            filme.direcao,
            filme.genero,
            filme.valor
        ]);
    }
}

alimentarTabela(filmes).then(() => {
    console.log("Tabela alimentada com sucesso");
});