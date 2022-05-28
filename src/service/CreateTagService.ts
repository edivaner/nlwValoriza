import { getCustomRepository } from "typeorm";
import {TagsRepositories} from "../repositories/TagsRepositories";




class CreateTagService{
    async execute(name: string){
        const TagsRepository = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("Incorrect name!");
        }

        const NameAlreadyExists = await TagsRepository.findOne({name});

        if(NameAlreadyExists){
            throw new Error("Name Already Exists!");
        }

        const tag = TagsRepository.create({name});

        await TagsRepository.save(tag);

        return tag;
    }
}

export {CreateTagService}