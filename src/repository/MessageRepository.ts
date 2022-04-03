import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entity/Message";

@EntityRepository(Message)
class MessageRepository extends Repository<Message>{}
export {MessageRepository}