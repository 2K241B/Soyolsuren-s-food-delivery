import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../contrcoller/user.js";

const user = Router();

user.post("/create", createUser);
user.get(":id", getUser);
user.get("/", getAllUsers);
user.put("/:id", updateUser );
user.delete("/:id", deleteUser );

export { user };
