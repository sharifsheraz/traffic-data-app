import { Router } from 'express';
import { getGroupedEvents, getEvents, createEvent } from '../controllers';

const router = Router();

router.get('/grouped', getGroupedEvents);
router.get('/', getEvents);
router.post('/', createEvent);

export default router;
