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

export const getAllFood = async (req, res) => {
    try {
        const response = await FoodModel.find();
        res.send(response);
        } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
    };

export const getFood = async (req, res ) => {
    const { id } = req.params;
    
    try {
        const response = await FoodModel.findById( id );
        res.send(response);
      } catch (error) {
        console.error("error");
        res.status (500).send(error.message);
      }
    }

export const updateFood = async (req, res ) => {
    const { id } = req.params;
    const updatedFood = req.body;

      try {
            const response = await FoodModel.findByIdAndUpdate( id, updatedFood, { new: true } );

          res.send(response);
        } catch (error) {
          console.error("error");
          res.status (500).send(error.message);
        }
      };

export const deleteFood = async (req, res ) => {
    const { id } = req.params;
        
      try {
          const response = await FoodModel.findByIdAndDelete( id );
          res.send(response);
        } catch (error) {
          console.error("error");
          res.status (500).send(error.message);
          }
        };