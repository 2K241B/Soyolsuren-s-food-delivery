import { Router } from "express";
import { createOrder } from "../contrcoller/order.js";


const order = Router();

order.post("/create", createOrder);


export { order };
