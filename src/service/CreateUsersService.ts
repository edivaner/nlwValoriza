import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IUsersRequest{
    name: string;
    email: string;
    admin: boolean;
}

class CreateUsersService {

    async execute({name, email, admin} : IUsersRequest){

        const usersRepository = getCustomRepository(UsersRepositories);

        const usersAlreadyExists = await usersRepository.findOne({email});
        
        if(!email) throw new Error("Email incorrect");
        
        if(usersAlreadyExists){
            throw new Error("Users Already exists");
        }

        const user = usersRepository.create({
            name,
            email,
            admin,
        });

        await usersRepository.save(user);

        return user;
    }
}

export {CreateUsersService}