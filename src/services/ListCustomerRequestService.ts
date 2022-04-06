import { getCustomRepository } from "typeorm";
import { RequestRepository } from "../repository/RequestRepository";

class ListCustomerRequestService {
    async execute(user_id:string){
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