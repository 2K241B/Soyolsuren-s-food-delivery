import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URI;

console.log(process.env.MONGODB_URI, 'db-irl')


export const Connect= async (url) => {
    try {
        await mongoose.connect(url);
        console.log ("Successfully connected");
    }
    catch (error) {
        console.log (error);
    }
}