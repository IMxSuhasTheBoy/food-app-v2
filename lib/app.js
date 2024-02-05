"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testRoutes_1 = __importDefault(require("../src/routes/testRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./config/db"));
// dotenv.config({ path: "./" });
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
///Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
///Routes
app.use("/api/v1/test", testRoutes_1.default);
///Home Route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to xSpark-food by skDoDesign.");
});
// // app.listen(PORT, () => {
// //   console.log(`Node Server is running on ${PORT}`);
// // });
///Database Connection and Server Start(special thanks to chatGpt approches suggetions)
db_1.default.once("open", () => {
    app.listen(PORT, () => {
        console.log(`Node Server is running on ${PORT}`);
    });
});
