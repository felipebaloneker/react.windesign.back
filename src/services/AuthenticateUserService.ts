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

        if(!user){
            throw new Error("Your username or password are invalid");
        }
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Your username or password are invalid");
        }

        const token = sign({
            email:user.email
        },`${process.env.TOKEN_KEY}`,{
            subjct:user.id,
            expiresIn:"1d",
        })
        return {token,user}
    }
}
export {AuthenticateUserService}