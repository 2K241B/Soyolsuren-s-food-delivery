import { Router } from "express";
import { createUser } from "../contrcoller/user.js";

const user = Router();

user.post("/create", createUser);

export { user };
