import {Router} from 'express'
import { CreateUserController } from './controllers/CreateUserController';

const routes = Router();

const createUserController  = new CreateUserController();
const authenticateUserController = new CreateTagController();


routes.post('/users/create', createUserController.handle);
routes.post('/users/login', authenticateUserController.handle);

export {routes}