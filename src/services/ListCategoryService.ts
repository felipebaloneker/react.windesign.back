import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repository/CategoryRepository";

class ListCategoryService{
    async execute(){
        const categoryRepository = getCustomRepository(CategoryRepository)
        const listCategory = categoryRepository.find({})
        return listCategory;

    }
}
export {ListCategoryService}