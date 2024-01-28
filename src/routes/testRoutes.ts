import express, { Router } from "express";
import testController from "../controllers/testControllers";

///Rouer object
const router: Router = express.Router();

///Define your routes using 'router.get', 'router.post', etc. & CBFunc from controllers
router.get("/test-user", testController.index);

router.get("/test-create", testController.create);

export default router;
