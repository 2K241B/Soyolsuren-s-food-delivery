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

export const getAllOrders = async (req, res) => {
    try {
        const response = await OrderModel.find();
        res.send(response);
        } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
    };

export const getOrder = async (req, res ) => {
    const { id } = req.params;
    
    try {
        const response = await OrderModel.findById( id );
        res.send(response);
      } catch (error) {
        console.error("error");
        res.status (500).send(error.message);
      }
    };


export const updateOdrer = async (req, res ) => {
    const { id } = req.params;
    const updatedUser = req.body;

      try {
            const response = await OrderModel.findByIdAndUpdate( id, updatedUser );
          res.send(response);
        } catch (error) {
          console.error("error");
          res.status (500).send(error.message);
        }
      };

export const deleteOrder = async (req, res ) => {
    const { id } = req.params;
        
      try {
          const response = await OrderModel.findByIdAndDelete( id );
          res.send(response);
        } catch (error) {
          console.error("error");
          res.status (500).send(error.message);
          }
        };

