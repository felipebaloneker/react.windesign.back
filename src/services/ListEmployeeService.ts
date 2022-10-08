import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class ListEmployeeService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository);
    const customers = await userRepository.find({
      where: {
        type: "design",
      },
    });
    return customers;
  }
}
export { ListEmployeeService };
