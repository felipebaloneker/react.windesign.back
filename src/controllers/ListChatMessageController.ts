import {Request, Response} from 'express'
import { ListChatMessageService } from '../services/ListChatMessagesService'

class ListChatMessageController{
    async handle(request:Request, response:Response){
        const toParsed = request.query.chat_id;
        const chat_id = toParsed.toString();
        const listChatMessage = new ListChatMessageService();
        const listMessage = await listChatMessage.execute({chat_id})

        return response.json(listMessage)
    }
}
export {ListChatMessageController}