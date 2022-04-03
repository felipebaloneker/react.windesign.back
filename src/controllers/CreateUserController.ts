import {Request, Response} from 'express'
import {CreateUserService} from '../services/CreateUserService'

class CreateUserController{
    async handle(request:Request, response:Response){
        const {name,email,password,type} = request.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name,email,password,type})

        return response.json(user)
    }
}

export {CreateUserController}