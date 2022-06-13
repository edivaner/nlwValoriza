import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad{
    sub: string
}

export function ensureAuthenticate(request: Request, response: Response, next : NextFunction){
    //Receber token

    const AuthToken = request.headers.authorization;
    
    //validar se o token esta preenchido
    if(!AuthToken)
        return response.status(401).json({message:"Token missing"})

    //validar se o token é válido
    const [, token] = AuthToken.split(" ");

    try{
        const { sub } = verify(token, "3082650e4ae4c8a32579bbd8f4b66eae") as IPayLoad;

        // Recuperar informações do usuário
        request.user_id = sub;
        
        return next();
    }catch{
        return response.status(401).end();
    }


}