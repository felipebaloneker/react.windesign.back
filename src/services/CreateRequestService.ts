import { getCustomRepository } from "typeorm";
import { RequestRepository } from "../repository/RequestRepository";

interface IRequestType{
    user_id: string;
    details: string;
    category_id:string;
    status:string;
}

class CreateRequestService{
    async execute({user_id, details, category_id, status}:IRequestType){
        const requestRepository = getCustomRepository(RequestRepository);
        if(!user_id && !details){
            throw new Error('Empty Field')
        }
        const request = requestRepository.create({
            author_id:user_id,
            details,
            category_id,
            status
        })
        await requestRepository.save(request);
        return request;
    }
}
export {CreateRequestService}