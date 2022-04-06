import { getCustomRepository } from "typeorm";
import { RequestRepository } from "../repository/RequestRepository";

class ListCustomerRequestService {
    async execute(date:string){
        const requestRepository = getCustomRepository(RequestRepository)
        const request = await requestRepository.find({
            where:{
                created_at:date
            }
        })
        return request;
    }
}
export {ListCustomerRequestService}