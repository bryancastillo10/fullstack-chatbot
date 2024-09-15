import express from "express";
import { addAppointment, 
        getAppointment, 
        updateAppointment, 
        deleteAppointment 
        } from "../controllers/appointment.controller";
import protectRoute from "../middleware/protectRoute";

const router = express.Router();

// Endpoints
router.post("/create", protectRoute,addAppointment);
router.get("/view", protectRoute,getAppointment);
router.put("/update/:id", protectRoute,updateAppointment);
router.delete("/delete/:id", protectRoute,deleteAppointment);

export default router;