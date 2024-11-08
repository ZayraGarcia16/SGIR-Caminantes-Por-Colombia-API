import express from "express";
import excursionRoutes from "./routes/excursion.js";
import port from "./config/config.js";

const app = express();

app.use(express.json());
app.use('/api', excursionRoutes);

app.get("/", (req, res) => {
    res.send("API - Excursiones");
});

app.listen(port, () => {
    console.log(`Se inicio el servidor, se ejecuta en el puerto ${port}`);
    
});
