import express,{Router} from "express";
import { userSignIn } from "../controllers/auth.controller";

const router = express.Router();


// Endpoints
router.post("/signin",userSignIn);



export default router;