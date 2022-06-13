import {Router} from "express";
import { createUsersController } from "./controllers/CreateUserController";
import {CreateTagsController} from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUsersController } from "./controllers/AuthenticateController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";


const router = Router();

const createUserController = new createUsersController();
const CreateTagController = new CreateTagsController();
const authenticateUsersController = new AuthenticateUsersController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsService = new ListUserReceiveComplimentsController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticate, ensureAdmin, CreateTagController.handle);
router.post("/login", authenticateUsersController.handle);
router.post("/compliments", ensureAuthenticate, createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticate, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticate, listUserReceiveComplimentsService.handle)

export {router}