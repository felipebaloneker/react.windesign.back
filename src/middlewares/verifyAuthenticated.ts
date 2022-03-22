import {Request, Response, NextFunction, response} from 'express'
import { verify } from 'jsonwebtoken'

interface IVerify{
    sub:string;
}

export function verifyAuthenticated(
    request:Request,
    Response:Response,
    next:NextFunction
){
    // Recebendo token
    const authToken = request.headers.authorization

    // Validar se token esta preenchido
    if(!authToken){
        return response.status(401).end();
    }

    //removendo Bearer no começo do token
    const [,token] = authToken.split(" ")
    
    try{
        // Verificando se token do usuario e valido
        const {sub} = verify(token, `${process.env.TOKEN_KEY}`) as IVerify;
        // recuperar informações do usuario
        request.user_id = sub;
        return next();
    }
}