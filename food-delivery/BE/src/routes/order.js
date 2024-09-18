import { Router } from "express";
import { createOrder, deleteOrder, getAllOrders, getOrder, updateOdrer } from "../contrcoller/order.js";


const order = Router();

order.post("/create", createOrder);
order.get("/", getAllOrders);
order.get(":id", getOrder);
order.put("/:id", updateOdrer);
order.delete("/:id", deleteOrder );

export { order };
