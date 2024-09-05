import { Router } from "express";
import { Login } from "../contrcoller/auth.js";



const auth = Router();


auth.post("/login", Login);


export { auth };
