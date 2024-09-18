import { FoodModel } from "../schema/food.js";


export const createFood = async (req, res) => {
  const { name, image, ingredient, price, discount, categoryId } = req.body;
 
  try {
            const response = await FoodModel.create({
                name, image, ingredient, price, discount, categoryId });
              res.status(200).json(response);
            } catch (error) {
              console.log(error);
              res.status(500).send(error.message)
            }
          };