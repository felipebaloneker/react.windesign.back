import {getCustomRepository} from 'typeorm'
import { OrderRepository } from "../repository/OrderRepository";
interface IOrderType{
    id:string;
    status:string;
}

class UpdateOrderByIdService{
    async execute({id,status}:IOrderType){
        const orderRepository = getCustomRepository(OrderRepository)

        const orderUpdate = await orderRepository.findOne({id})
        if(!orderUpdate){
            return "order not Exists";
        }
        await orderRepository.update(id,{status})
        return orderUpdate
    }
}

export {UpdateOrderByIdService}