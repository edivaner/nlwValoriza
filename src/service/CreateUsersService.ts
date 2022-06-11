import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs";

interface IUsersRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUsersService {

    async execute({name, email, admin, password} : IUsersRequest){

        const usersRepository = getCustomRepository(UsersRepositories);

        const usersAlreadyExists = await usersRepository.findOne({email});
        
        if(!email) throw new Error("Email incorrect");
        
        if(usersAlreadyExists){
            throw new Error("Users Already exists");
        }

        if(!admin)
            admin = false;

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password : passwordHash
        });

        await usersRepository.save(user);

        return user;
    }
}

export {CreateUsersService}