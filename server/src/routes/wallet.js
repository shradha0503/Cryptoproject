import express from 'express';
import { getWallet, getPortfolio } from '../controllers/walletController.js';
import { authenticateUser } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateUser, getWallet);
router.get('/portfolio', authenticateUser, getPortfolio);

export default router;
