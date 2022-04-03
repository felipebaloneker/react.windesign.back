import {Request, Response} from 'express'
import {ListCustomerService} from '../services/ListCustomerService'

class ListCustomerController{
    async handle(request:Request, response:Response){
        const {user_id} = request;
        const listCustomerService = new ListCustomerService();

        const customers = await listCustomerService.execute()

        return response.json(customers);
    }
}
export { ListCustomerController };