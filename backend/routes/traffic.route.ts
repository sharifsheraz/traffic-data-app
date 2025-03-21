import { Router } from 'express';
import { all } from '../controllers/traffic.controller';

const router = Router();

router.get('/', all);

export default router;
