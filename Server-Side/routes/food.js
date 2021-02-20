import { Router } from 'express';
import { foodControllers } from '../controllers/index.js';

const router = Router();

router.get('/', foodControllers.get.list);
router.post('/', foodControllers.get.pagination); //should be get method
router.post('/', foodControllers.post.add);
router.put('/', foodControllers.put.updateOne);
router.delete('/', foodControllers.delete.deleteOne);

export default router;
