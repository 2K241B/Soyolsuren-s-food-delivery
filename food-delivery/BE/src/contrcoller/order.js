import { OrderModel } from "../schema/order.js";


export const createOrder = async (req, res) => {
  const { orderNumber, foods, totalPrice, process, createdDate, district, khoroo, apartment, descriptionOfAddress, phoneNumber, methodOfPay } = req.body;
 
  try {
            const response = await OrderModel.create({
              orderNumber, foods, totalPrice, process, createdDate, district, khoroo, apartment, descriptionOfAddress, phoneNumber, methodOfPay });
              res.status(200).json(response);
            } catch (error) {
              console.log(error);
              res.status(500).send(error.message)
            }
          };
        

    