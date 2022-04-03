import { Request, Response, NextFunction } from "express";
import { getCustomRepository} from 'typeorm'
import { UserRepository } from "../repository/UserRepository";

export async function ensureManager(
    request:Request,
    response: Response,
    next: NextFunction
    ){
    // Verificando se esta logado
    const {user_id} = request;

    const usersRepositories = getCustomRepository(UserRepository);

    const manager = await usersRepositories.findOne({
        where:{
            id:user_id,
            type:'gestor',
        }
    });

    // Verificar se o usuario admin

    if(manager){
        return next();
    }

    return response.status(401).json({
        error:"Unauthorized",
    });
}