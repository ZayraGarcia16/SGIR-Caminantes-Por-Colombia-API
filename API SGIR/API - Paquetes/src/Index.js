import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import PaqueteRoutes from "./routes/Paquetes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use("/api", PaqueteRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Bienvenido  API de Paquetes</h1>");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.error(`Error al conectarse a MongoDB: ${error.message}`);
  });
