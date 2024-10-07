import express from "express";
import multer from "multer";
import {
    updateUserProfile,
    updateProfilePicture,
    deleteProfile
} from "../controllers/user.controller";

import protectRoute from "../middleware/protectRoute";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
// Endpoints
router.put("/update/:user_id",protectRoute,updateUserProfile);
router.post("/updatepicture/:user_id",upload.single("file"), updateProfilePicture);
router.delete("/delete/:user_id",protectRoute, deleteProfile)


export default router;