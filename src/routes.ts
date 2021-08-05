import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserReceivedComplimentsController } from './controllers/ListUserReceivedComplimentsController';
import { ListUsersController } from './controllers/ListUsersController';
import { ListUserSentComplimentsController } from './controllers/ListUserSentComplimentsController';
import { confirmAuthentication } from './middlewares/confirmAuthentication';
import { confirmAuthorization } from './middlewares/confirmAuthorization';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listTagsController = new ListTagsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listUsersController = new ListUsersController();
const listUserSentComplimentsController = new ListUserSentComplimentsController();

router.post('/login', authenticateUserController.handle);
router.post('/tags', confirmAuthentication, confirmAuthorization, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/compliments', confirmAuthentication, createComplimentController.handle);
router.get('/tags', confirmAuthentication, listTagsController.handle);
router.get('/users/compliments/received', confirmAuthentication, listUserReceivedComplimentsController.handle);
router.get('/users', confirmAuthentication, listUsersController.handle);
router.get('/users/compliments/sent', confirmAuthentication, listUserSentComplimentsController.handle);

export { router };
