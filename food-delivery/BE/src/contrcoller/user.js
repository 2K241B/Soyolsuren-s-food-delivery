import { UserModel } from "../schema/user.js";
import bcrypt from "bcrypt";

const saltRounds = 10;



export const createUser = async (req, res) => {
  const { email, name, password, phoneNumber, role } = req.body;
 
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await  bcrypt.hash(password, salt);
    
            const response = await UserModel.create({
                email,
                name,
                password: hash,
                phoneNumber,
                role,
              });

              res.status(200).send(response);
            } catch (error) {
              console.log(error, "error=>this is expected");
              res.status(500).send(error.message)
            }
          };
        
   
   
export const getUser = async (req, res ) => {
    const { id } = req.params;
    
    try {
        const response = await UserModel.findById( id );
        res.send(response);
      } catch (error) {
        console.error("error");
        res.status (500).send(error.message);
      }
    };


export const getAllUsers = async (req, res) => {
    try {
        const response = await UserModel.find();
        res.send(response);
        } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
    };

export const updateUser = async (req, res ) => {
    const { id } = req.params;
    const updatedUser = req.body;
    // const { email, name, role, phoneNumber } = req.body;
      try {
            const response = await UserModel.findByIdAndUpdate( id, updatedUser );
            // or {email: email,
            //   name: name,
            //   role: role,
            //   phoneNumber: phoneNumber
            // } );
          res.send(response);
        } catch (error) {
          console.error("error");
          res.status (500).send(error.message);
        }
      };
export const deleteUser = async (req, res ) => {
    const { id } = req.params;
        
      try {
          const response = await UserModel.findByIdAndDelete( id );
          res.send(response);
        } catch (error) {
          console.error("error");
          res.status (500).send(error.message);
          }
        };

    