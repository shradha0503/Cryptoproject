import { getOrCreateWallet, updateWalletBalance } from '../services/walletService.js';
import { getHolding, updateHolding } from '../services/holdingsService.js';
import { createTransaction } from '../services/transactionService.js';

const EXCHANGE_RATES = {
  BTC: 43250,
  ETH: 2280,
  SOL: 98.5,
  BNB: 312,
  USDT: 1,
};

export const buyCrypto = async (req, res) => {
  try {
    const { cryptoSymbol, amount } = req.body;
    const userId = req.user.id;

    if (!cryptoSymbol || !amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid crypto symbol or amount' });
    }

    const pricePerUnit = EXCHANGE_RATES[cryptoSymbol];
    if (!pricePerUnit) {
      return res.status(400).json({ error: 'Unsupported cryptocurrency' });
    }

    const totalCost = amount * pricePerUnit;

    const wallet = await getOrCreateWallet(userId);

    if (wallet.balance_usd < totalCost) {
      return res.status(400).json({ error: 'Insufficient funds' });
    }

    const newBalance = parseFloat(wallet.balance_usd) - totalCost;
    await updateWalletBalance(userId, newBalance);

    const existingHolding = await getHolding(userId, cryptoSymbol);
    let newAmount, newAvgPrice;

    if (existingHolding) {
      const existingValue = parseFloat(existingHolding.amount) * parseFloat(existingHolding.average_buy_price);
      const totalValue = existingValue + totalCost;
      newAmount = parseFloat(existingHolding.amount) + amount;
      newAvgPrice = totalValue / newAmount;
    } else {
      newAmount = amount;
      newAvgPrice = pricePerUnit;
    }

    await updateHolding(userId, cryptoSymbol, newAmount, newAvgPrice);

    const transaction = await createTransaction(
      userId,
      'buy',
      cryptoSymbol,
      amount,
      pricePerUnit,
      totalCost
    );

    res.json({
      success: true,
      transaction,
      newBalance,
      holding: {
        crypto_symbol: cryptoSymbol,
        amount: newAmount,
        average_buy_price: newAvgPrice
      }
    });
  } catch (error) {
    console.error('Buy crypto error:', error);
    res.status(500).json({ error: error.message || 'Failed to buy crypto' });
  }
};

export const sellCrypto = async (req, res) => {
  try {
    const { cryptoSymbol, amount } = req.body;
    const userId = req.user.id;

    if (!cryptoSymbol || !amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid crypto symbol or amount' });
    }

    const pricePerUnit = EXCHANGE_RATES[cryptoSymbol];
    if (!pricePerUnit) {
      return res.status(400).json({ error: 'Unsupported cryptocurrency' });
    }

    const holding = await getHolding(userId, cryptoSymbol);
    if (!holding || parseFloat(holding.amount) < amount) {
      return res.status(400).json({ error: 'Insufficient crypto holdings' });
    }

    const totalRevenue = amount * pricePerUnit;

    const wallet = await getOrCreateWallet(userId);
    const newBalance = parseFloat(wallet.balance_usd) + totalRevenue;
    await updateWalletBalance(userId, newBalance);

    const newAmount = parseFloat(holding.amount) - amount;
    await updateHolding(userId, cryptoSymbol, newAmount, parseFloat(holding.average_buy_price));

    const transaction = await createTransaction(
      userId,
      'sell',
      cryptoSymbol,
      amount,
      pricePerUnit,
      totalRevenue
    );

    res.json({
      success: true,
      transaction,
      newBalance,
      holding: newAmount > 0 ? {
        crypto_symbol: cryptoSymbol,
        amount: newAmount,
        average_buy_price: holding.average_buy_price
      } : null
    });
  } catch (error) {
    console.error('Sell crypto error:', error);
    res.status(500).json({ error: error.message || 'Failed to sell crypto' });
  }
};
