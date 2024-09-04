import { Router } from "express";
import { createUser, getUser } from "../contrcoller/user.js";

const user = Router();

user.post("/create", createUser);
user.get(":id", getUser);

export { user };
