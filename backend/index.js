import e from "express";
import cors from "cors";

import {dbPromise} from "./database/db.js";

export const filmes = [
    {
        id: "filme-0",
        img: "https://4.bp.blogspot.com/-GW1Ex5rl1o8/VMG9B8zuM2I/AAAAAAAAQ-A/PdXFAKUlN2c/s1600/somaoredor1.jpeg&quot;",
        titulo: "O Som ao redor",
        descricao:
            "O Som ao Redor começa com a chegada de uma milícia a uma rua de classe média da cidade do Recife, onde diferentes narrativas acabam se cruzando. Segundo a Associação Brasileira de Críticos de Cinema (Abraccine), é o 15º melhor filme da história do cinema nacional.",
        ano: 2013,
        direcao: "Kleber Mendonça",
        genero: "Suspense, Drama",
        valor: 3.0,
    },
    {
        id: "filme-1",
        img: "https://i.pinimg.com/736x/f0/b7/76/f0b7760fcba517412724eccfa73c5bb7.jpg",
        titulo: "Central do Brasil",
        descricao:
            "Dora, uma ex-professora que escreve cartas na Central do Brasil, e o menino Josué, que fica órfão da noite para o dia. O filme, que emocionou o mundo, recebeu duas indicações ao Oscar: nas categorias melhor filme estrangeiro e melhor atriz.",
        ano: 1998,
        direcao: "Walter Salles",
        genero: "Drama",
        valor: 4.5,
    },
    {
        id: "filme-2",
        img: "https://s2-gshow.glbimg.com/lJUqMlbeLUyATzlt1bd28GVwO7Y=/0x0:1122x1653/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_755cbb8e98bc4df6b024f1581a117b52/internal_photos/bs/2023/R/z/V67pKdSOmjsBKmodJEcA/cidade-de-deus.jpg",
        titulo: "Cidade de Deus",
        descricao:
            'Nos anos 1960, a favela é um complexo habitacional recém-construído longe do centro do Rio de Janeiro, com pouco acesso à eletricidade e água. Três ladrões amadores conhecido como "Trio Ternura" — Cabeleira, Alicate e Marreco — aterrorizam os negócios locais. Marreco é o irmão de Buscapé. Como Robin Hood, eles dividem parte do dinheiro roubado com os habitantes da favela chamada de Cidade de Deus e, em troca, são protegidos por eles.',
        ano: 2002,
        direcao: "Fernando Meirelles",
        genero: "Drama, Ação",
        valor: 3.5,
    },
    {
        id: "filme-3",
        img: "https://m.media-amazon.com/images/M/MV5BZTE1ZTlhNWEtNTAwMi00MmUzLTk3MGEtZjJiYjc3NTc0ZTc1XkEyXkFqcGc@._V1_.jpg",
        titulo: "Tropa de Elite",
        descricao:
            "Os acontecimentos do filme são narrados em primeira pessoa pelo Capitão Roberto Nascimento, dando uma perspectiva ao espectador de todos os fatos interligados. O filme começa in medias res, no ano de 1997, em um baile funk no Morro da Babilônia, uma das principais bases do narcotráfico da cidade Rio de Janeiro.",
        ano: 2007,
        direcao: "José Padilha",
        genero: "Drama, Policial",
        valor: 4.99,
    },
];

const app = e();
const PORT = 3000;
app.use(cors());
app.use(e.static('frontend/'));

app.get("/api", (req, res) => {
  return res.json({ message: "Servidor ativo" });
});

app.get("/api/filmes", async (req, res) => {
    const db = await dbPromise
    const filmesDB = await db.all("SELECT * FROM filmes");
    return res.json({ filmes: filmesDB });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});