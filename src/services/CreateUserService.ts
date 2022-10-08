import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  type: string;
  phone: string;
  cpf: string;
  cnpj: string;
  juridico: string;
  birthday: string;
  address: string;
}

class CreateUserService {
  async execute({
    name,
    email,
    password,
    type = "usuario",
    phone,
    cpf = "Null",
    cnpj = "Null",
    juridico = "false",
    birthday = "Null",
    address,
  }: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepository);
    if (!email) {
      return "Email incorrect";
    }
    const userAlreadyExists = await usersRepository.findOne({ email });
    if (userAlreadyExists) {
      return "User alreary exists";
    }
    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: passwordHash,
      type,
      phone,
      cpf,
      cnpj,
      juridico,
      birthday,
      address,
    });
    await usersRepository.save(user);
    return user;
  }
}
export { CreateUserService };
