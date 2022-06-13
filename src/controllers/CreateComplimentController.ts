import {Request, Response} from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";

class CreateComplimentController{
    async handle(request: Request, response: Response){

        const {tag_id, user_receiver, mensage} = request.body;

        const {user_id} = request;

        const CreateComplimentsService = new CreateComplimentService();

        const compliment = await CreateComplimentsService.execute({
            tag_id,
            user_sender : user_id,
            user_receiver ,
            mensage ,
        })

        return response.json(compliment);
    }
}

export {CreateComplimentController}