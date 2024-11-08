import express from "express";
import hotelRoutes from "../src/routes/hotels.js"; 
import port from "./config/config.js";


const app = express();


app.use(express.json()); 
app.use("/api", hotelRoutes); 

app.get("/", (req, res) => {
    res.send("<h1>Bienvenido  API de Hoteles</h1>");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

