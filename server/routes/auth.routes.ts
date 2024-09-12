import express,{Router} from "express";
import { userSignIn,userSignUp,userLogOut } from "../controllers/auth.controller";

const router = express.Router();


// Endpoints
router.post("/signin",userSignIn);
router.post("/signup",userSignUp);
router.post("/logout",userLogOut);


export default router;