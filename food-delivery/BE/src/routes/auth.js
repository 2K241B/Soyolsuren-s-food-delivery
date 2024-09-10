import { Router } from "express";
import { Login, SignUp } from "../contrcoller/auth.js";



const auth = Router();


auth.post("/login", Login);
auth.post("/signup", SignUp);


export { auth };
