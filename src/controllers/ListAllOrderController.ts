import {Request, Response} from 'express'
import { ListAllOrderService } from '../services/ListAllOrderService'

class ListAllOrderController{
    async handle(request:Request, response:Response){
        const toParsed = request.query.date;
        const date = toParsed.toString()
        const listOrderService = new ListAllOrderService();
        const orderList = await listOrderService.execute({date})

        return response.json(orderList)
    }
}
export {ListAllOrderController}