import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (rew, res) => {
    return res.status(200).json('hello world');
})

const PORT = process.env.PORT || 8000;

app.listen (PORT, () => {
    console.log("listening on port" + PORT);

})