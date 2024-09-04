import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Connect } from "./utils/db.js";
import { user } from "./routes/user.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/user", user)

app.get("/", (rew, res) => {
    return res.status(200).json('hello world');
})

const PORT = process.env.PORT || 8000;

app.listen (PORT, () => {
    Connect(process.env.MONGODB_URI);
    console.log("listening on port" + PORT);

})