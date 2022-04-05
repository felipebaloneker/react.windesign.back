import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repository/CategoryRepository";

class CreateCategoryService{
    async execute(name:string){
        const categoryRequest = getCustomRepository(CategoryRepository);
        const category = categoryRequest.create({
            name
        })
        await categoryRequest.save(category)
        return category;
    }
}

export {CreateCategoryService}