import {Request,Response} from 'express'
import { ListCustomerOrderService } from '../services/ListCustomerOrderService'

class ListCustomerOrderController{
    async handle(request:Request, response:Response){
        const toParsed = request.query.user_id;
        const user_id = toParsed.toString();
        const listCustomerOrder = new ListCustomerOrderService();
        const listOrder = await listCustomerOrder.execute({user_id})

        return response.json(listOrder)
    }
}

export {ListCustomerOrderController}