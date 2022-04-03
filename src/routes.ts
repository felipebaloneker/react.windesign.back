import {Router} from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import {ListCustomerController} from './controllers/ListCustomerController'
import { verifyAuthenticated } from './middlewares/verifyAuthenticated';
import { ensureManager } from './middlewares/ensureManager';
const routes = Router();

const createUserController  = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listCustomerController = new ListCustomerController();

routes.post('/users/create', createUserController.handle);
routes.post('/users/login', authenticateUserController.handle);

routes.get('/users/customers', verifyAuthenticated,ensureManager,listCustomerController.handle);
export {routes}