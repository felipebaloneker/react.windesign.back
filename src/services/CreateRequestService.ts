import { getCustomRepository } from "typeorm";
import { RequestRepository } from "../repository/RequestRepository";

interface IRequestType{
    author_id: string;
    details: string;
    category_id:string;
    status:string;
    created_at:string;
}

class CreateRequestService{
    async execute({author_id, details, category_id, status}:IRequestType){
        const requestRepository = getCustomRepository(RequestRepository);
        if(!author_id && !details){
            throw new Error('Empty Field')
        }
        const request = requestRepository.create({
            author_id,
            details,
            category_id,
            status
        })
        await requestRepository.save(request);
        return request;
    }
}
export {CreateRequestService}