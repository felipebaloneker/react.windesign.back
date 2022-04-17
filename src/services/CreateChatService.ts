import { getCustomRepository } from "typeorm";
import { ChatRepository } from "../repository/ChatRepository";
interface IChatType{
    order:string;
}
class CreateChatService{
    async execute({order}:IChatType){
        const chatRepository = getCustomRepository(ChatRepository)
        if(!order){
            return("Empty Field")
        }
        const chatExists = await chatRepository.findOne({
            where:{
                order,
            }
        })
        const chat = chatRepository.create({
            order,
        })
        if(!chatExists){
            await chatRepository.save(chat);
        }
        return chat;
    }
}
export {CreateChatService}