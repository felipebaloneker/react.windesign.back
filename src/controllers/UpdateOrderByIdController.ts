import {Request,Response} from 'express'
import { UpdateOrderByIdService } from '../services/UpdateOrderByIdService'

class UpdateOrderByIdController{
    async handle(request:Request, response:Response){
        const{order_id,status} = request.body;
        const updateOrderById = new UpdateOrderByIdService();
        const updateOrder = await updateOrderById.execute({id:order_id,status})

        return response.json(updateOrder)
    }
}

export {UpdateOrderByIdController}