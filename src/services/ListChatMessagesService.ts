import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../repository/MessageRepository";

interface IMessageType{
    author_id:string;
}

class ListChatMessageService{
    async execute({author_id}:IMessageType){
        const messageRepository = getCustomRepository(MessageRepository)
        const message_list = messageRepository.find({
            where:{
                author_id
            }
        })
        return message_list;
    }
} 
export {ListChatMessageService}