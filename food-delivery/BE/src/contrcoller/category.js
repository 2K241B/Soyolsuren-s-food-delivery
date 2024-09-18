import { CategoryModel } from "../schema/category.js";


export const createCategory = async (req, res) => {
  const { name } = req.body;
 
  try {
            const response = await CategoryModel.create({
              name });
              res.status(200).json(response);
            } catch (error) {
              console.log(error);
              res.status(500).send(error.message)
            }
          };