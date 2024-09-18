import { Router } from "express";
import { createCategory, getAllCategory, getCategory } from "../contrcoller/category.js";


const category = Router();

category.post("/create", createCategory);
category.get("/", getAllCategory);
category.get("/:id", getCategory);


export { category };