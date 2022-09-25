import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../repository/OrderRepository";

interface IOrderType{
    order_id:string;
}

class ListOrderByIdService {
    async execute({order_id}:IOrderType){
        const orderRepository = getCustomRepository(OrderRepository)
        const request = await orderRepository.find({
            where:{
                id:order_id
            }
        })
        return request;
    }
}
export {ListOrderByIdService}