import { Router } from "express";
import { createFood } from "../contrcoller/food.js";


const food = Router();

food.post("/create", createFood);


export { food };