import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetUserController } from './controllers/GetUserController';
import { LoginUserController } from './controllers/LoginUserController';
import { authentication } from './middleware/auth';

const router = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const getUserController = new GetUserController();

router.post("/users", createUserController.handle);
router.post("/login", loginUserController.handle);
router.get("/users/profile", authentication, getUserController.handle);

export default router;