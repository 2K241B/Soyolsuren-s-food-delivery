import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory, getCategoriesWithFoods, getCategory, updateCategory } from "../contrcoller/category.js";


const category = Router();

category.post("/create", createCategory);
category.get("/", getAllCategory);
category.get("/foods", getCategoriesWithFoods)
category.get("/:id", getCategory);
category.put("/:id", updateCategory);
category.delete("/:id", deleteCategory );



export { category };