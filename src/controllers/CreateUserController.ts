import {Request, Response} from "express";
import { CreateUsersService } from "../service/CreateUsersService";


class createUsersController{

    async handle(request: Request, response: Response){
        const {name, email, admin} = request.body;
    
        const createUserService = new CreateUsersService();

        const user = await createUserService.execute({name, email, admin});
    
        return response.json(user);
    }
}

export {createUsersController}