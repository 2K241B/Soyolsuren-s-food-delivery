import { Router } from "express";

import { createOrder, getAllOrders, getOrder } from "../contrcoller/order.js";



const order = Router();

order.post("/create", createOrder);
order.get("/", getAllOrders);
order.get("/:id", getOrder);


export { order };
