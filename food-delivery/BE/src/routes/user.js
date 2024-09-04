import { Router } from "express";
import { createUser, getAllUsers, getUser } from "../contrcoller/user.js";

const user = Router();

user.post("/create", createUser);
user.get(":id", getUser);
user.get("/", getAllUsers);

export { user };
