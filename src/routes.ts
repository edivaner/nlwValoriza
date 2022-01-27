import {Router} from "express";
import { createUsersController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new createUsersController();


router.post("/users", createUserController.handle);

export {router}