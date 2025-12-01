/*
  # Crypto Trading Platform Schema

  1. New Tables
    - `user_wallets`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `balance_usd` (numeric, default 10000.00 - starting balance)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `crypto_holdings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `crypto_symbol` (text, e.g., BTC, ETH)
      - `amount` (numeric)
      - `average_buy_price` (numeric)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `transactions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `transaction_type` (text: 'buy' or 'sell')
      - `crypto_symbol` (text)
      - `amount` (numeric)
      - `price_per_unit` (numeric)
      - `total_usd` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Users can only access their own wallet, holdings, and transactions
    - Policies for authenticated users to read/write their own data
*/

-- User Wallets Table
CREATE TABLE IF NOT EXISTS user_wallets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  balance_usd numeric(20, 2) DEFAULT 10000.00 NOT NULL CHECK (balance_usd >= 0),
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(user_id)
);

ALTER TABLE user_wallets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own wallet"
  ON user_wallets FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own wallet"
  ON user_wallets FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert own wallet"
  ON user_wallets FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Crypto Holdings Table
CREATE TABLE IF NOT EXISTS crypto_holdings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  crypto_symbol text NOT NULL,
  amount numeric(30, 10) NOT NULL CHECK (amount >= 0),
  average_buy_price numeric(20, 2) NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(user_id, crypto_symbol)
);

ALTER TABLE crypto_holdings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own holdings"
  ON crypto_holdings FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own holdings"
  ON crypto_holdings FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own holdings"
  ON crypto_holdings FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own holdings"
  ON crypto_holdings FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Transactions Table
CREATE TABLE IF NOT EXISTS transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  transaction_type text NOT NULL CHECK (transaction_type IN ('buy', 'sell')),
  crypto_symbol text NOT NULL,
  amount numeric(30, 10) NOT NULL,
  price_per_unit numeric(20, 2) NOT NULL,
  total_usd numeric(20, 2) NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own transactions"
  ON transactions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions"
  ON transactions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_wallets_user_id ON user_wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_crypto_holdings_user_id ON crypto_holdings(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_created_at ON transactions(created_at DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
DROP TRIGGER IF EXISTS update_user_wallets_updated_at ON user_wallets;
CREATE TRIGGER update_user_wallets_updated_at
  BEFORE UPDATE ON user_wallets
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_crypto_holdings_updated_at ON crypto_holdings;
CREATE TRIGGER update_crypto_holdings_updated_at
  BEFORE UPDATE ON crypto_holdings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();