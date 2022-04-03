import { EntityRepository, Repository } from "typeorm";
import { Request } from "../entity/Request";

@EntityRepository(Request)
class RequestRepository extends Repository<Request>{

}

export {RequestRepository}