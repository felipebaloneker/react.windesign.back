import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../repository/OrderRepository";

class ListAllOrderService {
    async execute(){
        const orderRepository = getCustomRepository(OrderRepository)
        const order = await orderRepository.find({
        })
        return order;
    }
}
export {ListAllOrderService}