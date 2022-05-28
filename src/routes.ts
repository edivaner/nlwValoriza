import {Router} from "express";
import { createUsersController } from "./controllers/CreateUserController";
import {CreateTagsController} from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

const createUserController = new createUsersController();
const CreateTagController = new CreateTagsController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, CreateTagController.handle);

export {router}