import { getCustomRepository } from "typeorm";
import {MessageRepository} from '../repository/MessageRepository'

interface IRequestType{
    author_id:string;
    chat_id:string;
    body:string;
}

class CreateMessageRepository{
    async execute({author_id, chat_id, body}:IRequestType){
        const messageRepository = getCustomRepository(MessageRepository)

        if(!author_id && !chat_id){
            throw new Error("Empty Field")
        }
        const message = messageRepository.create({
            author_id,
            chat_id,
            body,
        })
        await messageRepository.save(message);
        return message;
    }
}
export {CreateMessageRepository}