import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repository/CategoryRepository";
interface ICategoryType{
    name:string;
    details:string;
}

class CreateCategoryService{
    async execute({name,details}:ICategoryType){
        const categoryRepository = getCustomRepository(CategoryRepository);
        const category = categoryRepository.create({
            name,
            details
        })
        await categoryRepository.save(category)
        return category;
    }
}

export {CreateCategoryService}