import {Router} from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import {ListCustomerController} from './controllers/ListCustomerController'
import { verifyAuthenticated } from './middlewares/verifyAuthenticated';
import { ensureManager } from './middlewares/ensureManager';
import { ListEmployeeController } from './controllers/ListEmployeeController';
const routes = Router();

const createUserController  = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listCustomerController = new ListCustomerController();
const listEmployeeController = new ListEmployeeController();

routes.post('/users/create', createUserController.handle);
routes.post('/users/login', authenticateUserController.handle);

routes.get('/users/list/customer', verifyAuthenticated,ensureManager,listCustomerController.handle);
routes.get('/users/list/employee', verifyAuthenticated,ensureManager,listEmployeeController.handle);
export {routes}