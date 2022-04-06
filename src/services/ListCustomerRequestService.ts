import { getCustomRepository } from "typeorm";
import { RequestRepository } from "../repository/RequestRepository";

interface IRequestType{
    user_id:string;
}

class ListCustomerRequestService {
    async execute({user_id}:IRequestType){
        const requestRepository = getCustomRepository(RequestRepository)
        const request = await requestRepository.find({
            where:{
                author_id:user_id
            }
        })
        return request;
    }
}
export {ListCustomerRequestService}