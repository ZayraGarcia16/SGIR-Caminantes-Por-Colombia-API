import express from "express";

import { crearcliente, obtenercliente, consultarcliente, actualizarcliente, borrarcliente } from '../controllers/controlador.js';

const router = express.Router();

router.post("/clientes",crearcliente)

// 2. ruta para obtener todos los documentos de mi bd en la collection cliente

router.get("/clientes", obtenercliente);

// 3. ruta para consultar un documento de mi bd en la collection cliente

router.get("/clientes/:id",consultarcliente );

// 4. ruta para actualizar un documento en la collection cliente

router.put("/clientes/:id",actualizarcliente);

//5. ruta para borrar un documento de mi bd en la collection cliente

router.delete("/clientes/:id",borrarcliente);
export default router;