import { getCustomRepository } from "typeorm";
import { RequestRepository } from "../repository/RequestRepository";

interface IRequestType{
    date:string
}

class ListAllRequestService {
    async execute({date}:IRequestType){
        const requestRepository = getCustomRepository(RequestRepository)
        const request = await requestRepository.find({
            where:{
                created_at:date
            }
        })
        return request;
    }
}
export {ListAllRequestService}