import excursion from "../models/excursiones.js";

const createExcursion = (req, res) => {
    const excursion = excursion (req.body);
    excursion 
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
};

const getExcursion = (req, res) => {
    excursion
    .find()
    .then((data) => res.json (data))
    .catch((error) => res.json({ message: error.menssage }));
};

const getExcursionById = (req, resp) => {
    const { id } = req.params;
    excursion
    .findById(id)
    .then((data) => resp.json (data))
    .catch((error) => resp.json({ message: error.message }));
};

const updateExcursion = (req, res) => {
    const { id } = req.params;
    const { categoria, destino, precio, duracion, transporte, comida, actividad } = req.body;
    excursion
    .updateOne({ _id: id}, {$set: { categoria, destino, precio, duracion, transporte, comida, actividad }})
    .then((data) => res.json (data))
    .catch((error) => res.json({ message: error.message }));
};

const deleteExcursion = (req, resp) => {
    const { id } = req.params;
    excursion
    .deleteOne({ _id: id})
    .then((data) => resp.json (data))
    .catch((error) => res.json({ message: error.message}));
};

export {createExcursion, getExcursion, getExcursionById, updateExcursion, deleteExcursion};