import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { confirmAuthorization } from './middlewares/confirmAuthorization';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();

router.post('/login', authenticateUserController.handle);
router.post('/tags', confirmAuthorization, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/compliments', createComplimentController.handle);

export { router };
