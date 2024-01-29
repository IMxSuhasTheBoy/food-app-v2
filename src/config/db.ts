import mongoose, { Connection } from "mongoose";

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/food-app-v2";

mongoose.connect(MONGO_URL).catch((error) => {
  console.error("Error connecting to MongoDB:", error.message);
  process.exit(1);
});

const db: Connection = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;