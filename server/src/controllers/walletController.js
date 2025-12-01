import { getOrCreateWallet } from '../services/walletService.js';
import { getHoldings } from '../services/holdingsService.js';
import { getTransactions } from '../services/transactionService.js';

export const getWallet = async (req, res) => {
  try {
    const userId = req.user.id;
    const wallet = await getOrCreateWallet(userId);
    res.json(wallet);
  } catch (error) {
    console.error('Get wallet error:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch wallet' });
  }
};

export const getPortfolio = async (req, res) => {
  try {
    const userId = req.user.id;
    const [wallet, holdings, transactions] = await Promise.all([
      getOrCreateWallet(userId),
      getHoldings(userId),
      getTransactions(userId, 50)
    ]);

    res.json({
      wallet,
      holdings,
      transactions
    });
  } catch (error) {
    console.error('Get portfolio error:', error);
    res.status(500).json({ error: error.message || 'Failed to fetch portfolio' });
  }
};
