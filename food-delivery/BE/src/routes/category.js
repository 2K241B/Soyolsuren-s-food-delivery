import { Router } from "express";
import { createCategory, getAllCategory, getCategory, updateCategory } from "../contrcoller/category.js";


const category = Router();

category.post("/create", createCategory);
category.get("/", getAllCategory);
category.get("/:id", getCategory);
category.put("/:id", updateCategory);


export { category };