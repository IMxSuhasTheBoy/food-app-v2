import express from "express";
import testRoutes from "../src/routes/testRoutes";
import dotenv from "dotenv";

import cors from 'cors';
import morgan from "morgan";


///dotenv configuration
// dotenv.config({ path: "./" });
dotenv.config();

const app = express();


///Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


const PORT = process.env.PORT || 3000;

app.use("/api/v1/test", testRoutes);

///Home Route
app.get("/", (req, res) => {
  return res.status(200).send("Welcome to xSpark-food by skDoDesign.");
});

app.listen(PORT, () => {
  console.log(`Node Server is running on ${PORT}`);
});
