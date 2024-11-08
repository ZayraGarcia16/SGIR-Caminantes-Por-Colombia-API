import clienteSchema from '../models/cliente.js';

const crearcliente = (req, res) => {
    const cliente = clienteSchema(req.body);  // Corregido: usar 'new'
    cliente
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error.message })); 
};

const obtenercliente = (req, resp) => {
    clienteSchema
    .find()
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message: error.message }));  // Corregido: enviar 'error.message'
};

const consultarcliente = (req,resp)=>{
    const { id } = req.params;
    clienteSchema
    .findById(id)
    .then((data) => resp.json(data))
    .catch((error) => resp.json({ message: error }));
};

const actualizarcliente = (req, resp) => {
    const { id } = req.params;
    const{ nombre, apellido, correo, usuario, contraseña, token  } = req.body;
    clienteSchema
     .updateOne({ _id: id}, { $set: { nombre, apellido, correo, usuario, contraseña, token} })
     .then((data)=> resp.json(data))
     .catch((error) => resp.json({ message: error }));
};


const borrarcliente = (req, resp) => {
    const { id } = req.params;
    clienteSchema
     .deleteOne({ _id: id })
     .then((data) => resp.json(data))
     .catch((error) => resp.json({ message: error }));
}; 

export { actualizarcliente, borrarcliente, consultarcliente, crearcliente, obtenercliente };



