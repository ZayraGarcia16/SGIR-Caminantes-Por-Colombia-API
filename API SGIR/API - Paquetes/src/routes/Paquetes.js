import express from "express";
import {
  createPaquetes,
  getPaquetes,
  getPaquetesById,
  updatePaquetes,
  deletePaquetes,
} from "../controllers/Paquetescontroller.js";

const router = express.Router();

// Definir las rutas

// Ruta POST para crear un Paquete
router.post("/Paquetes", createPaquetes);

// Ruta GET para obtener todos los Paquetes
router.get("/Paquetes", getPaquetes);

// Ruta GET para obtener un Paquete específico
router.get("/Paquetes/:id", getPaquetesById);

// Ruta PUT para actualizar un Paquete
router.put("/Paquete/:id", updatePaquetes);

// Ruta DELETE para eliminar un Paquete
router.delete("/Paquetes/:id", deletePaquetes);

export default router;
