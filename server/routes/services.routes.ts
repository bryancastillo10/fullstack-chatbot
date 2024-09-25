import express from "express";

import {getServices}from "../controllers/services.controller";

const router = express.Router();

// Endpoints
router.get("/", getServices);

export default router;