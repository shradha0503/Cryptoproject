import express from 'express';
import { buyCrypto, sellCrypto } from '../controllers/tradeController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

router.post('/buy', authenticateUser, buyCrypto);
router.post('/sell', authenticateUser, sellCrypto);

export default router;
