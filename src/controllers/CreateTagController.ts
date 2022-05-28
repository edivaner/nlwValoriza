import {Request, Response} from "express";
import {CreateTagService} from "../service/CreateTagService";


class CreateTagsController{
    async handle(request: Request, response: Response){
        const {name} = request.body

        const CreateTag = new CreateTagService();

        const tag = await CreateTag.execute(name);

        return response.json(tag);

    }
}

export {CreateTagsController}