import { Request, Response } from "express";
import { AddParticipantService } from "../services/AddParticipantService";

class AddParticipantController{
    async handle(request:Request, response:Response){
        const {user_id} = request;
        const {chat_id} = request.body;
        const addParticipantService = new AddParticipantService();

        const participant = await addParticipantService.execute({user_id,chat_id});

        return response.json(participant)

    }
}
export {AddParticipantController}