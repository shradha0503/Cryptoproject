# CryptoSwap Backend API

Node.js Express backend for the CryptoSwap platform with Supabase integration.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```
PORT=3001
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

4. Run the server:
```bash
npm run dev
```

## API Endpoints

### Trade Endpoints

**POST /api/trade/buy**
Buy cryptocurrency
```json
{
  "cryptoSymbol": "BTC",
  "amount": 0.01
}
```

**POST /api/trade/sell**
Sell cryptocurrency
```json
{
  "cryptoSymbol": "BTC",
  "amount": 0.01
}
```

### Wallet Endpoints

**GET /api/wallet**
Get user wallet balance

**GET /api/wallet/portfolio**
Get complete portfolio including wallet, holdings, and transaction history

## Authentication

All endpoints require Bearer token authentication:
```
Authorization: Bearer <supabase_access_token>
```
