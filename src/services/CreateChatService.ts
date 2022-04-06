import { getCustomRepository } from "typeorm";
import { ChatRepository } from "../repository/ChatRepository";

class CreateChatService{
    async execute(request:string){
        const chatRepository = getCustomRepository(ChatRepository)
        if(!request){
            throw new Error("Empty Field")
        }
        const chat = chatRepository.create({
            request,
        })
        await chatRepository.save(chat);
        return chat;
    }
}
export {CreateChatService}