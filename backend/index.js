import e from "express";
import cors from "cors";

import { filmesRouter } from "./routes/filmes.js";
import { apiRouter } from "./routes/api.js";

const app = e();
const PORT = 3000;

app.use(e.json());
app.use(cors());
app.use(e.static('frontend/'));

app.use("/api/filmes", filmesRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});