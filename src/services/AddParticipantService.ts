import { getCustomRepository } from "typeorm";
import { ParticipantsRepository } from "../repository/ParticipantsRepository";
interface IPartType {
    user_id:string;
    chat_id:string;
}

class AddParticipantService{
    async execute({user_id,chat_id}:IPartType){
        const participantsRepository = getCustomRepository(ParticipantsRepository);
        const participantExits = await participantsRepository.findOne({
            where:{
                user_id,
                chat_id
            }
        })
        if(participantExits){
            return participantExits
        }
        if(!participantExits){
            const participants  = participantsRepository.create({
                user_id,
                chat_id,
            })
            await participantsRepository.save(participants)
            return participants;
        }
    }
}

export {AddParticipantService}