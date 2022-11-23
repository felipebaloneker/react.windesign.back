import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

interface IUser{
    id: string;
    password:string;
}
class UpdatePasswordService{
    async execute({id,password}:IUser){
        const usersRepository = getCustomRepository(UserRepository);
        const userAlreadyExists = await usersRepository.findOne({ id});
        if (!userAlreadyExists) {

          return "Usuario não encontrado";
        }

        const passwordHash = await hash(password, 8);
        await usersRepository.update(id,{
            password:passwordHash
        })
        return userAlreadyExists
    }
}
export {UpdatePasswordService}