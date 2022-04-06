import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../repository/OrderRepository";

interface IOrderType{
    date:string
}

class ListAllOrderService {
    async execute({date}:IOrderType){
        const orderRepository = getCustomRepository(OrderRepository)
        const order = await orderRepository.find({
            where:{
                created_at:date
            }
        })
        return order;
    }
}
export {ListAllOrderService}