import { Router } from "express";
import { createCategory, getAllCategory } from "../contrcoller/category.js";


const category = Router();

category.post("/create", createCategory);
category.get("/", getAllCategory);


export { category };