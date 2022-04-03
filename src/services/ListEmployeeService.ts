import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class ListEmployeeService {
    async execute(){
    const userRepository = getCustomRepository(UserRepository)
    const customers = await userRepository.find({
        where:{
            type:'funcionario',
        }
    })
    return customers;
    }    
}
export {ListEmployeeService}