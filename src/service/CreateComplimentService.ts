import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/complimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver : string;
    mensage : string;
}

class CreateComplimentService{

    async execute({tag_id, user_receiver, user_sender, mensage} : IComplimentRequest){

        const complimentsRepositories =  getCustomRepository(ComplimentsRepositories);
        const userRepositories = getCustomRepository(UsersRepositories);

        const userReceiver = await userRepositories.findOne(user_receiver);
        
        if(user_sender === user_receiver)
            throw new Error("Incorrect User Receiver");

        if(!userReceiver)
            throw new Error("User received does not exists !");

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver ,
            mensage ,
        })

        await complimentsRepositories.save(compliment);

        return compliment;

    }
}

export {CreateComplimentService}