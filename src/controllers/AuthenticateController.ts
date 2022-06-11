import { Request, Response } from 'express';
import { AuthenticateUsersService } from '../service/AuthenticateUsersService';


class AuthenticateUsersController{

    async handle(request: Request, response: Response){
        const {email, password} = request.body;

        const authenticateUserService = new AuthenticateUsersService();

        const token = await authenticateUserService.execute({email, password});

        return response.json(token);

    }
}

export { AuthenticateUsersController };