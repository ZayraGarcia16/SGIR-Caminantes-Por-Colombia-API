import express from 'express';
import { createHotel, getHotels, getHotelById, updateHotel, deleteHotel } from '../controllers/hotelcontroller.js';

const router = express.Router();

// Definir las rutas

// Ruta POST para crear un hotel
router.post('/hotels', createHotel);

// Ruta GET para obtener todos los hoteles
router.get('/hotels', getHotels); 

// Ruta GET para obtener un hotel específico
router.get('/hotels/:id', getHotelById); 

// Ruta PUT para actualizar un hotel
router.put('/hotels/:id', updateHotel); 

// Ruta DELETE para eliminar un hotel
router.delete('/hotels/:id', deleteHotel); 

export default router;