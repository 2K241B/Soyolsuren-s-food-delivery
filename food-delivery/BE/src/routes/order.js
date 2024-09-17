import { Router } from "express";
import { createOrder, getAllOrders, getOrder, updateOdrer } from "../contrcoller/order.js";




const order = Router();

order.post("/create", createOrder);
order.get("/", getAllOrders);
order.get(":id", getOrder);
order.put("/:id", updateOdrer);


export { order };
