import express from "express";
import { addAppointment, 
        getAppointment, 
        updateAppointment, 
        deleteAppointment 
        } from "../controllers/appointment.controller";
const router = express.Router();

// Endpoints
router.post("/create", addAppointment);
router.get("/view", getAppointment);
router.put("/update/:id", updateAppointment);
router.delete("/delete/:id", deleteAppointment);

export default router;