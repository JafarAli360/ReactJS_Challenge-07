import express from "express";
import { filterCars } from "../controller/controllerCars.js";

const router = express.Router();

router.get("/datacars", filterCars);

export default router;
