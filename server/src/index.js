import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tradeRoutes from './routes/trade.js';
import walletRoutes from './routes/wallet.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'CryptoSwap API is running' });
});

app.use('/api/trade', tradeRoutes);
app.use('/api/wallet', walletRoutes);

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
