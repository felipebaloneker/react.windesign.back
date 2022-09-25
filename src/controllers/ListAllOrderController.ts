import {Request, Response} from 'express'
import { ListAllOrderService } from '../services/ListAllOrderService'

class ListAllOrderController{
    async handle(request:Request, response:Response){
        const listOrderService = new ListAllOrderService();
        const orderList = await listOrderService.execute()

        return response.json(orderList)
    }
}
export {ListAllOrderController}