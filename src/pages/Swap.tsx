import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { ArrowDownUp } from 'lucide-react';
import { useState } from 'react';

const Swap = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Swap Crypto</h1>
          <p className="text-muted-foreground">Exchange your cryptocurrencies instantly</p>
        </div>

        <Card className="p-8 bg-background border-border/40">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">From</label>
              <div className="flex items-center gap-3">
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="text-lg"
                />
                <select className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 font-medium">
                  <option>BTC</option>
                  <option>ETH</option>
                  <option>USDC</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12"
              >
                <ArrowDownUp className="h-5 w-5" />
              </Button>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">To</label>
              <div className="flex items-center gap-3">
                <Input
                  type="number"
                  placeholder="Receive amount"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="text-lg"
                />
                <select className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 font-medium">
                  <option>ETH</option>
                  <option>BTC</option>
                  <option>USDC</option>
                </select>
              </div>
            </div>

            <Button className="w-full bg-gradient-primary hover:shadow-glow text-white font-medium py-2 h-12">
              Swap
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-background border-border/40">
          <h3 className="font-bold mb-4">Swap Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price</span>
              <span>1 BTC = 24.5 ETH</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Fee</span>
              <span>0.1%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Network</span>
              <span>Ethereum</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Swap;
