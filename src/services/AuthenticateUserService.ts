import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import {compare} from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticationRequest{
    email:string;
    password:string;
}

class AuthenticateUserService{
    async execute({email,password}:IAuthenticationRequest){
        const userRepository = getCustomRepository(UserRepository);
        const user = await userRepository.findOne({email});
        // verificando se usuario existe
        if(!user){
            throw new Error("Your username or password are invalid");
        }
        
        // verificando se senha digitada corresponde
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Your username or password are invalid");
        }
        // retornando dados do usuario
        // expiração do token de 1 dia
        const token = sign({
            email:user.email
        },`${process.env.TOKEN_KEY}`,{
            subject:user.id,
            expiresIn:"1d",
        })
        return {token,user}
    }
}
export {AuthenticateUserService}