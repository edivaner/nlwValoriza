import {Router} from "express";
import { createUsersController } from "./controllers/CreateUserController";
import {CreateTagsController} from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUsersController } from "./controllers/AuthenticateController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";


const router = Router();

const createUserController = new createUsersController();
const CreateTagController = new CreateTagsController();
const authenticateUsersController = new AuthenticateUsersController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, CreateTagController.handle);
router.post("/login", authenticateUsersController.handle);
router.post("/compliments", createComplimentController.handle);


export {router}