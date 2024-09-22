import express from "express";
import {
    updateUserProfile,
    updateProfilePicture,
    deleteProfile
} from "../controllers/user.controller";

import protectRoute from "../middleware/protectRoute";

const router = express.Router();

// Endpoints
router.put("/update/:user_id",protectRoute,updateUserProfile);
router.put("/updatepicture/:user_id",protectRoute, updateProfilePicture);
router.delete("/delete/:user_id",protectRoute, deleteProfile)


export default router;