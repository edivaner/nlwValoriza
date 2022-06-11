import { getCustomRepository } from "typeorm";
import {UsersRepositories} from "../repositories/UsersRepositories";
import {compare} from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserService {
    email:string;
    password:string;
}


class AuthenticateUsersService {
    async execute({email, password} : IAuthenticateUserService){
        const usersRepository = getCustomRepository(UsersRepositories);
        const user = await usersRepository.findOne({email});
        if(!user){
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);
        
        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email,
        }, "3082650e4ae4c8a32579bbd8f4b66eae", {  
            subject: user.id,
            expiresIn: "1d" 
        });
        
        return token;

    }
}

export { AuthenticateUsersService };