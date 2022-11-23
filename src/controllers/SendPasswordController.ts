import { Request, Response } from "express";
import { SendPasswordService } from "../services/SendPasswordService";

class SendPasswordController{
    async handle(request:Request, response:Response){
        const{email} = request.body;
        const SendPassword = new SendPasswordService();
        const sendMail = await SendPassword.execute({email})
        return response.json(sendMail);
    }
}

export {SendPasswordController}