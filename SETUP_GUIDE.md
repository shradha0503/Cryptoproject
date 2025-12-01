# CryptoSwap Setup Guide

Complete setup guide for the CryptoSwap platform with authentication, buy/sell functionality, and backend API.

## Architecture

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (Email/Password)

## Prerequisites

- Node.js 16+
- Supabase account
- npm or yarn

## Step 1: Database Setup

The database schema is already created with the migration. It includes:

- `user_wallets` - User USD balances
- `crypto_holdings` - User cryptocurrency holdings
- `transactions` - Buy/sell transaction history

Each user starts with $10,000 USD balance.

## Step 2: Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Configure environment variables in `server/.env`:
```env
PORT=3001
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Get your Supabase credentials from:
- Project URL: Supabase Dashboard > Settings > API > Project URL
- Service Role Key: Supabase Dashboard > Settings > API > service_role key

5. Start the backend server:
```bash
npm run dev
```

The server will run on http://localhost:3001

## Step 3: Frontend Setup

1. Navigate to the project root:
```bash
cd ..
```

2. Create `.env.local` file in the root directory:
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_API_URL=http://localhost:3001
```

Get your credentials:
- Project URL: Same as backend
- Anon Key: Supabase Dashboard > Settings > API > anon public key

3. Install dependencies (if not already done):
```bash
npm install
```

4. Start the frontend (dev server runs automatically):
The frontend should already be running on http://localhost:8080

## Step 4: Testing the Application

1. **Sign Up**:
   - Go to http://localhost:8080/login
   - Create a new account with email and password
   - You'll be redirected to the main page

2. **Check Initial Balance**:
   - You should see $10,000.00 USD balance in the Trade widget

3. **Buy Crypto**:
   - Click the "Buy" button
   - Enter USD amount (e.g., 1000)
   - See how much crypto you'll receive
   - Click "Buy Now"
   - Your balance will update

4. **Sell Crypto**:
   - Click the "Sell" button
   - Select a crypto you own
   - Enter the amount to sell
   - Click "Sell Now"
   - Your USD balance increases

## API Endpoints

### Authentication
All endpoints require Bearer token in the Authorization header:
```
Authorization: Bearer <user_access_token>
```

### Trade Endpoints

**POST /api/trade/buy**
```json
{
  "cryptoSymbol": "BTC",
  "amount": 0.01
}
```

**POST /api/trade/sell**
```json
{
  "cryptoSymbol": "ETH",
  "amount": 0.5
}
```

### Wallet Endpoints

**GET /api/wallet** - Get user's USD balance

**GET /api/wallet/portfolio** - Get complete portfolio (wallet + holdings + transactions)

## Supported Cryptocurrencies

- BTC (Bitcoin) - $43,250
- ETH (Ethereum) - $2,280
- SOL (Solana) - $98.50
- BNB (Binance Coin) - $312
- USDT (Tether) - $1

Prices are hardcoded for demo purposes.

## Security Features

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- JWT token authentication
- Service role key kept secure in backend
- Anon key safe to use in frontend

## Troubleshooting

### Backend won't start
- Check if port 3001 is available
- Verify Supabase credentials in server/.env
- Check server logs for errors

### Frontend can't connect to backend
- Ensure backend server is running
- Verify VITE_API_URL in .env.local
- Check browser console for CORS errors

### Authentication fails
- Verify Supabase credentials match in both .env files
- Check if user exists in Supabase dashboard
- Ensure RLS policies are properly set up

### Transactions fail
- Check if user has sufficient balance
- Verify token prices in backend
- Check backend logs for detailed errors

## Production Deployment

For production:

1. **Backend**: Deploy to a Node.js hosting service (Heroku, Railway, Render)
2. **Frontend**: Deploy to Vercel, Netlify, or similar
3. **Environment Variables**: Set all variables in hosting platform
4. **Security**:
   - Use HTTPS for all connections
   - Keep service role key secure
   - Add rate limiting
   - Implement proper error handling
   - Add transaction logging

## Next Steps

- Add real-time price updates
- Integrate with actual crypto APIs
- Add transaction history view
- Implement portfolio analytics
- Add price charts
- Support more cryptocurrencies
- Add deposit/withdrawal features
