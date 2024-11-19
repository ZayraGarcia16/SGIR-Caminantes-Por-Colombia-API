
import adminSchema from "../modelo/admin.js";
import{ validatorHandler} from "../middleware/validator.handler.js"
import {createAdminSchema,
  getAdminSchema,
  updateAdminSchema,
  deleteAdminSchema,} from "../validacion/adminValidatorDTO.js";

export const createAdmin = [
    validatorHandler(createAdminSchema, "body"),
    async (req, res) => {
     const admin = new adminSchema(req.body); 
     await admin
        .save()
        .then((data) => res.status(201).json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
},
];

export const getAdmin = (req, res) => {
    adminSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error.message }));
};

export const getAdminById = [
    validatorHandler(getAdminSchema, "params"),
    async(req, resp)=>{
        const { id } = req.params;
        try{
            const admin = await AdminSchema.findById(id);
            if(!admin){
                return resp.status(404).json({
                    message: "usuario no encontrado",
                });
            }
            resp.json(admin);
        }catch (error) {
            resp.status(500).json({
                message: error.message,
            });
        }
   }
];

 export const updateAdmin =[
        validatorHandler(getAdminSchema, "params"),
        validatorHandler(updateAdminSchema, "body"),
        async(req, resp) => {
            const { id } = req.params;
            const { nombre_completo, correo, nit, contraseña } = req.body; 
            try{
                const adminUpdate = await AdminSchema.updateOne(
                    { _id: id },
                    { $set: { nombre_completo, correo, nit, contraseña} }
                );
                if (adminUpdate.matchedCount === 0) {
                    return resp.status(404).json({ message: "Usuario no encontrado" });
                }
                if (adminUpdate.modifiedCount === 0) {
                    return resp.status(400).json({ message: "No se realizaron cambios" });
                }
                resp.status(200).json({ message: "Usuario actualizado correctamente" });
                } catch (error) {
                resp.status(500).json({ message: error.message });
            }
        },
    ];
    


export const deleteAdmin = [
    validatorHandler(deleteAdminSchema, "params"),
    async (req, resp) => {
        const { id } = req.params;
        try {
            const result = adminSchema.deleteOne({ _id: id });
            if (result.deletedCount === 0) {
              resp.status(404).json({ message: "Usuario no encontrado" });
            }
            resp.status(200).json({ message: "Usuario eliminado correctamente" });
          } catch (error) {
            resp.status(500).json({ message: error.message });
        }
    },
];
