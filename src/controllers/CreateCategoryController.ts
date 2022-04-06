import {Request, Response} from 'express'
import { CreateCategoryService } from '../services/CreateCategoryService' 

class CreateCategoryController{
    async handle(request:Request, response:Response){
        const {name} = request.body;

        const createCategoryController = new CreateCategoryService();
        const category = await createCategoryController.execute({name})

        return response.json(category)
    }
}
export {CreateCategoryController}