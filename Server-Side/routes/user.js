import { Router } from 'express';
import { userControllers }  from '../controllers/index.js';

const router = Router();

router.post('/registration', userControllers.post.register);
router.post('/login', userControllers.post.login);
router.post('/logout', userControllers.post.logout);

export default router;
