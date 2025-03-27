import express from "express";
import dotenv from "dotenv";
import "./models/todolist.js";
import todoRouter from "./router/todorouter.js";
import cors from "cors";

const e = dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", todoRouter);

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
