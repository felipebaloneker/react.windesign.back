import { EntityRepository, Repository } from "typeorm";
import { Participants } from "../entity/Participants";

@EntityRepository(Participants)
class ParticipantsRepository extends Repository<Participants>{

}

export {ParticipantsRepository}