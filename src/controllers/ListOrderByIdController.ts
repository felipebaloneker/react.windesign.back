import {Request,Response} from 'express'
import { ListOrderByIdService } from '../services/ListOrderByIdService'

class ListOrderByIdController{
    async handle(request:Request, response:Response){
        const toParsed = request.query.order_id;
        const order_id = toParsed.toString();
        const ListOrderById = new ListOrderByIdService();
        const listOrder = await ListOrderById.execute({order_id})

        return response.json(listOrder)
    }
}

export {ListOrderByIdController}