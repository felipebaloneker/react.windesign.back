import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repository/CategoryRepository";
interface ICategoryType{
    name:string;
}
class CreateCategoryService{
    async execute({name}:ICategoryType){
        const categoryRepository = getCustomRepository(CategoryRepository);
        const category = categoryRepository.create({
            name
        })
        await categoryRepository.save(category)
        return category;
    }
}

export {CreateCategoryService}