import express from "express";
import {createExcursion, getExcursion, getExcursionById, updateExcursion, deleteExcursion} from "../controllers/excursioncontrollers.js";

const router = express.Router();

router.post("/excursion", createExcursion);

router.get("/excursion", getExcursion);

router.get("/excursion/: id", getExcursionById);

router.put("/excursion/: id", updateExcursion);

router.delete("/excursion/: id", deleteExcursion);

export default router;