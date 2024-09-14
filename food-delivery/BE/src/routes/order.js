import { Router } from "express";
import { createOrder, getAllOrders, deleteOrder } from "../contrcoller/order.js";


const order = Router();

order.post("/create", createOrder);
order.get("/", getAllOrders);
order.delete("/:id", deleteOrder );


export { order };
