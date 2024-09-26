import express from "express";
import { getConsultants } from "../controllers/consultant.controller";

const router = express.Router();

// Endpoints
router.get("/view", getConsultants)

export default router;