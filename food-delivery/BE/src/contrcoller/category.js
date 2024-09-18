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


export const getAllCategory = async (req, res) => {
    try {
        const response = await CategoryModel.find();
        res.send(response);
        } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
    };


export const getCategory = async (req, res ) => {
    const { id } = req.params;
    
    try {
        const response = await CategoryModel.findById( id );
        res.send(response);
      } catch (error) {
        console.error("error");
        res.status (500).send(error.message);
      }
    };

export const updateCategory = async (req, res ) => {
    const { id } = req.params;
    const updatedCategory = req.body;

      try {
            const response = await CategoryModel.findByIdAndUpdate( id, updatedCategory, { new: true } );

          res.send(response);
        } catch (error) {
          console.error("error");
          res.status (500).send(error.message);
        }
      };

export const deleteCategory = async (req, res ) => {
    const { id } = req.params;
        
      try {
          const response = await CategoryModel.findByIdAndDelete( id );
          res.send(response);
        } catch (error) {
          console.error("error");
          res.status (500).send(error.message);
          }
        };