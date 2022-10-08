import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../repository/CategoryRepository";
interface ICategoryType {
  name: string;
  details: string;
  price: string;
}

class CreateCategoryService {
  async execute({ name, details, price }: ICategoryType) {
    const categoryRepository = getCustomRepository(CategoryRepository);
    const category = categoryRepository.create({
      name,
      details,
      price,
    });
    await categoryRepository.save(category);
    return category;
  }
}

export { CreateCategoryService };
