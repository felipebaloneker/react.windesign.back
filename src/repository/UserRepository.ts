import { EntityRepository, Repository } from "typeorm";
import {User} from '../entity/Users'

@EntityRepository(User)

class UserRepository extends Repository<User>{}

export {UserRepository}