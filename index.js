import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import purchaseRouter from './routes/purchase.routes.js';
import albumRouter from './routes/album.routes.js';
const app = express();

dotenv.config();
connect();
app.use(express.json());

// SUAS ROTAS AQUI!!! v v v não esqueça de importá-las!
app.use("/album", albumRouter);
app.use("/purchase", purchaseRouter);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.PORT}!`);
});
