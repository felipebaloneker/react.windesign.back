import {Request, Response} from 'express'
import { ListAllRequestService } from '../services/ListAllRequestService'

class ListAllRequestController{
    async handle(request:Request, response:Response){
        const toParsed = request.query.date;
        const date = toParsed.toString()
        const listRequestService = new ListAllRequestService();
        const listRequest = await listRequestService.execute({date})
    }
}
export {ListAllRequestController}