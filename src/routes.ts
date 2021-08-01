import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { confirmAuthorization } from './middlewares/confirmAuthorization';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/login', authenticateUserController.handle);
router.post('/tags', confirmAuthorization, createTagController.handle);
router.post('/users', createUserController.handle);

export { router };
