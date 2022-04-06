import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repository/CategoryRepository";
interface ICategoryType{
    name:string;
}
class CreateCategoryService{
    async execute({name}:ICategoryType){
        const categoryRequest = getCustomRepository(CategoryRepository);
        const category = categoryRequest.create({
            name
        })
        await categoryRequest.save(category)
        return category;
    }
}

export {CreateCategoryService}