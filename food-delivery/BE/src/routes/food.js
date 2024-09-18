import { Router } from "express";
import { createFood, getAllFood, getFood, updateFood } from "../contrcoller/food.js";


const food = Router();

food.post("/create", createFood);
food.get("/", getAllFood);
food.get("/:id", getFood);
food.put("/:id", updateFood);


export { food };