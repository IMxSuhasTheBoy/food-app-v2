"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const testControllers_1 = __importDefault(require("../controllers/testControllers"));
///Rouer object
const router = express_1.default.Router();
///Define your routes using 'router.get', 'router.post', etc. & CBFunc from controllers
router.get("/test-user", testControllers_1.default.index);
router.get("/test-create", testControllers_1.default.create);
exports.default = router;
