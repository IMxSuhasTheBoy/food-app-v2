import express from "express";
import testRoutes from "../src/routes/testRoutes";

import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import db from "./config/db";

// dotenv.config({ path: "./" });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

///Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

///Routes
app.use("/api/v1/test", testRoutes);

///Home Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to xSpark-food by skDoDesign.");
});

// // app.listen(PORT, () => {
// //   console.log(`Node Server is running on ${PORT}`);
// // });

///Database Connection and Server Start
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Node Server is running on ${PORT}`);
  });
});
