import { Router } from "express";
import { createOrder, getAllOrders } from "../contrcoller/order.js";


const order = Router();

order.post("/create", createOrder);
order.get("/", getAllOrders);


export { order };
