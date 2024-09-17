import { Router } from 'express';
import { getConfig, updateConfig } from '../controllers/configController.js';

const router = Router();

router.get('/', getConfig);
router.put('/', updateConfig);

export default router;
