import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import * as nodemailer from "nodemailer";

interface IUser{
    email: string;
}
class SendPasswordService{
    async execute({email}: IUser){
        const usersRepository = getCustomRepository(UserRepository);
        if (!email) {
          return "Usuario não encontrado";
        }
        const userAlreadyExists = await usersRepository.findOne({ email });
        if (!userAlreadyExists) {

          return "Usuario não encontrado";
        }
      const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          auth: {
              user: process.env.GOOGLE_APP_EMAIL,
              pass: process.env.GOOGLE_APP_PW
          },
      })
      const data = {
        from: process.env.GOOGLE_APP_EMAIL,
        to:email,
        subject: 'Recuperar Senha',
        html:
        `
        <h3>Por favor clicke no link para recuperar sua senha.</h3>
        <p>${process.env.CLIENT_URL}/reset_password/${userAlreadyExists.id}</p>
        `
      }

      transporter.sendMail(data,function (error, info) {
        if (error) {
            return error;
        }
      })
      return "E-mail enviado com sucesso!";
    }

}
export {SendPasswordService}