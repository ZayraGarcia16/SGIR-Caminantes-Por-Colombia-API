import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Conectado a MONGODB");
})
.catch((error) => {
    console.log(`Ocurrio un error: ${ error.message }`);
});

export default port;