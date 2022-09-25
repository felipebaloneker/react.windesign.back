import {Request, Response} from 'express'
import { CreateMessageService} from '../services/CreateMessageService'

class CreateMessageController{
    async handle(request:Request, response:Response){
        const {user_id} = request;
        const {chat_id, body,type,author_name} = request.body;
        const createMessageService = new CreateMessageService()
        const message = await createMessageService.execute({user_id,chat_id,author_name,body,type})

        return response.json(message)
    }
}
export {CreateMessageController}