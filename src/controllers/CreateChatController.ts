import {Request, Response} from 'express'
import { CreateChatService } from '../services/CreateChatService'

class CreateChatController{
    async handle(request:Request, response:Response){
        const {order} = request.body;
        const createChatService = new CreateChatService();
        const chat = await createChatService.execute({order})

        return response.json(chat)
    }
}
export {CreateChatController}