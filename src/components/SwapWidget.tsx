import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { api } from "@/lib/api";

const tokens = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "BNB", name: "Binance Coin" },
  { symbol: "USDT", name: "Tether" },
];

const exchangeRates: Record<string, number> = {
  BTC: 43250,
  ETH: 2280,
  SOL: 98.5,
  BNB: 312,
  USDT: 1,
};

interface Holding {
  crypto_symbol: string;
  amount: number;
  average_buy_price: number;
}

interface Portfolio {
  wallet: { balance_usd: number };
  holdings: Holding[];
}

export const SwapWidget = () => {
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(false);
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    try {
      const data = await api.getPortfolio();
      setPortfolio(data);
    } catch (error) {
      console.error('Failed to load portfolio:', error);
    }
  };

  const getBalance = (symbol: string) => {
    if (!portfolio) return '0.0000';
    const holding = portfolio.holdings.find(h => h.crypto_symbol === symbol);
    return holding ? holding.amount.toFixed(4) : '0.0000';
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    if (value && !isNaN(Number(value))) {
      if (tradeType === 'buy') {
        const toRate = exchangeRates[toToken.symbol];
        const calculatedTo = (Number(value) / toRate).toFixed(6);
        setToAmount(calculatedTo);
      } else {
        const fromRate = exchangeRates[fromToken.symbol];
        const calculatedTo = (Number(value) * fromRate).toFixed(2);
        setToAmount(calculatedTo);
      }
    } else {
      setToAmount("");
    }
  };

  const handleSwapTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleTrade = async () => {
    if (!fromAmount || Number(fromAmount) <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    setLoading(true);
    try {
      if (tradeType === 'buy') {
        await api.buyCrypto(toToken.symbol, Number(toAmount));
        toast.success(`Successfully bought ${toAmount} ${toToken.symbol}`);
      } else {
        await api.sellCrypto(fromToken.symbol, Number(fromAmount));
        toast.success(`Successfully sold ${fromAmount} ${fromToken.symbol}`);
      }

      await loadPortfolio();
      setFromAmount('');
      setToAmount('');
    } catch (error: any) {
      toast.error(error.message || 'Transaction failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="glass-card p-6 max-w-md w-full border-primary/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold gradient-text">Trade Crypto</h3>
        {portfolio && (
          <div className="text-right">
            <div className="text-xs text-muted-foreground">USD Balance</div>
            <div className="text-sm font-bold">${portfolio.wallet.balance_usd.toFixed(2)}</div>
          </div>
        )}
      </div>

      <div className="flex gap-2 mb-6">
        <Button
          variant={tradeType === 'buy' ? 'default' : 'outline'}
          onClick={() => setTradeType('buy')}
          className="flex-1"
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          Buy
        </Button>
        <Button
          variant={tradeType === 'sell' ? 'default' : 'outline'}
          onClick={() => setTradeType('sell')}
          className="flex-1"
        >
          <TrendingDown className="h-4 w-4 mr-2" />
          Sell
        </Button>
      </div>

      <div className="space-y-2 mb-2">
        <label className="text-sm text-muted-foreground">{tradeType === 'buy' ? 'Pay with USD' : 'Sell'}</label>
        <div className="glass-card p-4 border-border/30">
          {tradeType === 'sell' && (
            <div className="flex items-center justify-between mb-2">
              <select
                value={fromToken.symbol}
                onChange={(e) => setFromToken(tokens.find((t) => t.symbol === e.target.value)!)}
                className="bg-transparent text-lg font-semibold outline-none cursor-pointer text-foreground"
              >
                {tokens.map((token) => (
                  <option key={token.symbol} value={token.symbol} className="bg-background">
                    {token.symbol} - {token.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <input
            type="number"
            value={fromAmount}
            onChange={(e) => handleFromAmountChange(e.target.value)}
            placeholder="0.00"
            className="w-full bg-transparent text-2xl font-bold outline-none text-foreground"
          />
          <div className="text-xs text-muted-foreground mt-2">
            Balance: {tradeType === 'buy' ? (portfolio ? `$${portfolio.wallet.balance_usd.toFixed(2)}` : '$0.00') : getBalance(fromToken.symbol)} {tradeType === 'sell' && fromToken.symbol}
          </div>
        </div>
      </div>

      <div className="flex justify-center -my-2 z-10 relative">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSwapTokens}
          className="bg-muted hover:bg-muted/80 p-2 rounded-full border-2 border-background transition-colors"
        >
          <ArrowDownUp className="h-5 w-5 text-primary" />
        </motion.button>
      </div>

      <div className="space-y-2 mt-2">
        <label className="text-sm text-muted-foreground">{tradeType === 'buy' ? 'Buy' : 'Receive USD'}</label>
        <div className="glass-card p-4 border-border/30">
          {tradeType === 'buy' && (
            <div className="flex items-center justify-between mb-2">
              <select
                value={toToken.symbol}
                onChange={(e) => setToToken(tokens.find((t) => t.symbol === e.target.value)!)}
                className="bg-transparent text-lg font-semibold outline-none cursor-pointer text-foreground"
              >
                {tokens.map((token) => (
                  <option key={token.symbol} value={token.symbol} className="bg-background">
                    {token.symbol} - {token.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <input
            type="number"
            value={toAmount}
            readOnly
            placeholder="0.00"
            className="w-full bg-transparent text-2xl font-bold outline-none text-muted-foreground"
          />
          <div className="text-xs text-muted-foreground mt-2">
            Balance: {tradeType === 'sell' ? (portfolio ? `$${portfolio.wallet.balance_usd.toFixed(2)}` : '$0.00') : getBalance(toToken.symbol)} {tradeType === 'buy' && toToken.symbol}
          </div>
        </div>
      </div>

      <Button
        className="w-full mt-6 btn-glow bg-gradient-primary border-0 text-white font-bold text-lg h-14"
        onClick={handleTrade}
        disabled={loading}
      >
        {loading ? 'Processing...' : `${tradeType === 'buy' ? 'Buy' : 'Sell'} Now`}
      </Button>

      <div className="mt-4 p-3 glass-card border-border/30 text-sm">
        <div className="flex justify-between text-muted-foreground">
          <span>Price</span>
          <span className="text-foreground font-medium">
            1 {tradeType === 'buy' ? toToken.symbol : fromToken.symbol} = ${tradeType === 'buy' ? exchangeRates[toToken.symbol] : exchangeRates[fromToken.symbol]}
          </span>
        </div>
      </div>
    </Card>
  );
};
