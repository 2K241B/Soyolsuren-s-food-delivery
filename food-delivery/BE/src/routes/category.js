import { Router } from "express";
import { createCategory } from "../contrcoller/category.js";


const category = Router();

category.post("/create", createCategory);


export { category };