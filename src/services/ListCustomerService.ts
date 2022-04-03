import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class ListCustomerService {
    async execute(){
    const userRepository = getCustomRepository(UserRepository)
    const customers = await userRepository.find({
        where:{
            type:'usuario',
        }
    })
    return customers;
    }    
}
export {ListCustomerService}