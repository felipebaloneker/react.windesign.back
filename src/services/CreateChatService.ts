import { getCustomRepository } from "typeorm";
import { ChatRepository } from "../repository/ChatRepository";
interface IChatType{
    order:string;
}
class CreateChatService{
    async execute({order}:IChatType){
        const chatRepository = getCustomRepository(ChatRepository)
        if(!order){
            throw new Error("Empty Field")
        }
        const chat = chatRepository.create({
            order,
        })
        await chatRepository.save(chat);
        return chat;
    }
}
export {CreateChatService}