"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/food-app-v2";
mongoose_1.default.connect(MONGO_URL).catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
});
const db = mongoose_1.default.connection;
///Connection listeners
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});
exports.default = db;
