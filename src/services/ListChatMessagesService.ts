import { getCustomRepository } from "typeorm";
import { MessageRepository } from "../repository/MessageRepository";

interface IMessageType{
    chat_id:string;
}

class ListChatMessageService{
    async execute({chat_id}:IMessageType){
        const messageRepository = getCustomRepository(MessageRepository)
        const message_list = messageRepository.find({
            where:{
                chat_id
            }
        })
        return message_list;
    }
} 
export {ListChatMessageService}