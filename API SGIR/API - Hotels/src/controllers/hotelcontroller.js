import Hotel from '../models/hotel.js';

const createHotel = (req, res) => {
    const hotel = new Hotel(req.body);
    hotel
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error.message }));
};

const getHotels = (req, res) => {
    Hotel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error.message }));
};

const getHotelById = (req, res) => {
    
    const { id } = req.params;
    Hotel.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error.message }));
};

const updateHotel = (req, res) => {
    const { id } = req.params;
    const { nombre, ubicacion, numeroHabitaciones, numeroPersonas, comida, precio, categoria } = req.body;
    Hotel
    .updateOne({ _id: id },{ $set: { nombre, ubicacion, numeroHabitaciones, numeroPersonas, comida, precio, categoria } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
};

const deleteHotel = (req, res) => {
    const { id } = req.params;
    Hotel.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error.message }));
};

export { createHotel, getHotels, getHotelById, updateHotel, deleteHotel };