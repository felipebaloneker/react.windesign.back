import {Request, Response} from 'express'
import {ListEmployeeService} from '../services/ListEmployeeService'

class ListEmployeeController{
    async handle(request:Request, response:Response){
        const listEmployeeService = new ListEmployeeService();

        const Employees = await listEmployeeService.execute()

        return response.json(Employees);
    }
}
export { ListEmployeeController };