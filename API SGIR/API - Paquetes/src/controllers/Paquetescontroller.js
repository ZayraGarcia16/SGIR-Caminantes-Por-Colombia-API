import Paquetes from "../models/Paquete.js";

const createPaquetes = (req, res) => {
  const Paquetes = new Paquetes(req.body);
  Paquetes.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
};

const getPaquetes = (req, res) => {
  Paquetes.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
};

const getPaquetesById = (req, res) => {
  const { id } = req.params;
  Paquetes.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
};

const updatePaquetes = (req, res) => {
  const { id } = req.params;
  const {
    Destino,
    Actividad,
    numeropersonas,
    Categoria,
    Precio,
    Transporte,
    Comida,
  } = req.body;
  Paquetes.updateOne(
    { _id: id },
    {
      $set: {
        Destino,
        Actividad,
        numeropersonas,
        Categoria,
        Precio,
        Transporte,
        Comida,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
};

const deletePaquetes = (req, res) => {
  const { id } = req.params;
  Paquetes.deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }));
};

export {
  createPaquetes,
  getPaquetes,
  getPaquetesById,
  updatePaquetes,
  deletePaquetes,
};
