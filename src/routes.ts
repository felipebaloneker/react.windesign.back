import {Router} from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import {ListCustomerController} from './controllers/ListCustomerController'
import { verifyAuthenticated } from './middlewares/verifyAuthenticated';
import { ensureManager } from './middlewares/ensureManager';
import { ListEmployeeController } from './controllers/ListEmployeeController';
import { AddParticipantController } from './controllers/AddParticipantController';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateChatController } from './controllers/CreateChatController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { ListAllOrderController } from './controllers/ListAllOrderController';
import { ListChatMessageController } from './controllers/ListChatMessageController';
import { ListCustomerOrderController } from './controllers/ListCustomerOrderController';
import { CreateOrderController } from './controllers/CreateOrderController';
const routes = Router();

const addParticipantController  = new AddParticipantController();
const authenticateUserController = new AuthenticateUserController();
const createCategoryController = new CreateCategoryController();
const createChatController = new CreateChatController();
const createMessageController = new CreateMessageController();
const createOrderController = new CreateOrderController();
const createUserController  = new CreateUserController();
const listAllOrderController = new ListAllOrderController();
const listChatMessageController = new ListChatMessageController();
const listCustomerOrderController = new ListCustomerOrderController();
const listCustomerController = new ListCustomerController();
const listEmployeeController = new ListEmployeeController();


routes.post('/users/create', createUserController.handle);
routes.post('/users/login', authenticateUserController.handle);

routes.post('/users/create/order', verifyAuthenticated,createOrderController.handle);
routes.post('/category/create',verifyAuthenticated,ensureManager,createCategoryController.handle);
routes.post('/chat/create',verifyAuthenticated,createChatController.handle);
routes.post('/chat/create/user', verifyAuthenticated,addParticipantController.handle);
routes.post('/chat/message',verifyAuthenticated,createMessageController.handle);

routes.get('/users/list/customer', verifyAuthenticated,ensureManager,listCustomerController.handle);
routes.get('/users/list/employee', verifyAuthenticated,ensureManager,listEmployeeController.handle);
routes.get('/users/list/order', verifyAuthenticated,listCustomerOrderController.handle);
routes.get('/users/list/order/all', verifyAuthenticated,listAllOrderController.handle);
routes.get('chat/list/message',verifyAuthenticated,listChatMessageController.handle);

export {routes}