import {hash} from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repository/UserRepository';

interface IUserRequest{
    name:string;
    email:string;
    password:string;
    type:string;
}

class CreateUserService{
    async execute({name, email, password, type="usuario"}:IUserRequest){
        const usersRepository = getCustomRepository(UserRepository);
        if(!email){
            throw new Error('Email incorrect');
        }
        const userAlreadyExists = await usersRepository.findOne({email})
        if(userAlreadyExists){
            throw new Error('User alreary exists')
        }
        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            password:passwordHash,
            type,
        })
        await usersRepository.save(user)
        return user;
    }
}
export {CreateUserService}