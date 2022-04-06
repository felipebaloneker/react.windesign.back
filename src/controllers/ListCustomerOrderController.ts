import {Request,Response} from 'express'
import { ListCustomerOrderService } from '../services/ListCustomerOrderService'

class ListCustomerOrderController{
    async handle(request:Request, response:Response){
        const {user_id} = request;

        const listCustomerOrder = new ListCustomerOrderService();
        const listOrder = await listCustomerOrder.execute({user_id})

        return response.json(listOrder)
    }
}

export {ListCustomerOrderController}