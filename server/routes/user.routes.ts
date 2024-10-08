import express from "express";
import multer from "multer";
import {
  updateUserProfile,
  updateProfilePicture,
  getProfilePicture,
  deleteProfile,
} from "../controllers/user.controller";

import protectRoute from "../middleware/protectRoute";

const router = express.Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 
    }
});
// Endpoints
router.put("/update/:user_id", protectRoute, updateUserProfile);
router.post("/updatepicture/:user_id",upload.single("file"),updateProfilePicture);
router.get("/getpicture/:user_id", protectRoute, getProfilePicture);
router.delete("/delete/:user_id", protectRoute, deleteProfile);

export default router;