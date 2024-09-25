import express from "express";

import {getServices, getServicesName}from "../controllers/services.controller";

const router = express.Router();

// Endpoints
router.get("/", getServices);
router.get("/name",getServicesName)

export default router;