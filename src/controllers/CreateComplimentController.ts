import {Request, Response} from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";

class CreateComplimentController{
    async handle(request: Request, response: Response){

        const {tag_id, user_receiver, user_sender, mensage} = request.body;

        const CreateComplimentsService = new CreateComplimentService();

        const compliment = await CreateComplimentsService.execute({
            tag_id,
            user_sender,
            user_receiver ,
            mensage ,
        })

        return response.json(compliment);
    }
}

export {CreateComplimentController}