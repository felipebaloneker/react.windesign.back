import { getCustomRepository } from "typeorm";
import { OrderRepository } from "../repository/OrderRepository";

interface IOrderType{
    user_id: string;
    details: string;
    category_id:string;
    status:string;
}

class CreateOrderService{
    async execute({user_id, details, category_id, status}:IOrderType){
        const orderRepository = getCustomRepository(OrderRepository);
        if(!user_id && !details){
            throw new Error('Empty Field')
        }
        const order = orderRepository.create({
            author_id:user_id,
            details,
            category_id,
            status
        })
        await orderRepository.save(order);
        return order;
    }
}
export {CreateOrderService}