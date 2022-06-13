import {Request, Response, NextFunction} from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";



export async function ensureAdmin(request: Request, response: Response, nextFunction: NextFunction){

    const {user_id} = request;
    console.log(user_id);

    const usersRepositories = getCustomRepository(UsersRepositories);

    const {admin} = await usersRepositories.findOne(user_id);

    //verificando se o usuario é um admin
    if(admin){
        return nextFunction();
    }else{
        return response.status(401).json({
            error : "Unauthorized - User is not admin",
        });
    }
}