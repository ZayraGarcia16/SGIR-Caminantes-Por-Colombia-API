// src/index.js

import express from "express";
import dotenv from "dotenv";

import conectarBD from "./config/conexion.js";
import clientesRoutes from "./routes/clientes.js";
const app = express();
dotenv.config();

// Middleware para parsear JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido al API WEB de clientes</h1>");
});

// Usar las rutas importadas
app.use("/api", clientesRoutes);

conectarBD();

app.listen(process.env.PORT, () => {
    console.log(`Se inició el servidor, y está escuchando por el puerto ${process.env.PORT}`);
});


