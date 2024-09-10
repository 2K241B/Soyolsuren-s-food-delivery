
import { UserModel } from "../schema/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Email and password are required");
        }
        const response = await UserModel.findOne({ email });

        if (!response) {
            return res.status(404).send("User not found");
        }
        bcrypt.compare(password, response.password, function (err, result) {
            if (err) {
                return res.status(500).send("Error comparing passwords");
            }

            if (result) {
                const privateKey = '123'; 
                const token = jwt.sign({ id: response._id, email: response.email }, privateKey, {
                    expiresIn: '1h'
                });

                return res.send({ token });
            } else {
                return res.status(401).send('Incorrect password');
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export const SignUp = async (req, res) => {
    try {
      const user = await UserModel.create(req, res);
      res.status(200).json({ success: true, user: user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
