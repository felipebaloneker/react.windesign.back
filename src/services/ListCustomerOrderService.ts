import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../repository/OrderRepository";

interface IOrderType{
    user_id:string;
}

class ListCustomerOrderService {
    async execute({user_id}:IOrderType){
        const orderRepository = getCustomRepository(OrderRepository)
        const request = await orderRepository.find({
            where:{
                author_id:user_id
            }
        })
        return request;
    }
}
export {ListCustomerOrderService}