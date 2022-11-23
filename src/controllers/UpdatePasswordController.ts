import {Request,Response} from 'express'
import { UpdatePasswordService } from '../services/UpdatePasswordService';

class UpdatePasswordController{
    async handle(request:Request,response:Response){
        const{id, password} = request.body;
        const updatePassword = new UpdatePasswordService();
        const update = await updatePassword.execute({id, password})
        if(update == "Usuario não encontrado"){
            return response.status(400).json(update)
        }
        return response.json(update);
    }
}
export {UpdatePasswordController}