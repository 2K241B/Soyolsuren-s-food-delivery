import { Router } from "express";
import { createFood, getAllFood } from "../contrcoller/food.js";


const food = Router();

food.post("/create", createFood);
food.get("/", getAllFood);


export { food };