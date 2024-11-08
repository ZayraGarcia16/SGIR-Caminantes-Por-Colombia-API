import mongoose from "mongoose";

const PaquetesSchema = mongoose.Schema(
  {
    Destino: {
      type: String,
      required: true,
    },
    actividad: {
      type: String,
      required: true,
    },
    numeroPersonas: {
      type: Number,
      required: true,
    },
    Categoria: {
      type: Number,
      required: true,
    },
    Precio: {
      type: String,
      required: true,
    },
    Transporte: {
      type: Number,
      required: true,
    },
    Comida: {
      type: String,
      required: true,
    },
  },

  { collection: "Paquetes" }
);
export default mongoose.model("Paquetes", PaquetesSchema);
