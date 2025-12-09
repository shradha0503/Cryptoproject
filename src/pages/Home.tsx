import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to CryptoSwap</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 bg-background border-border/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Portfolio Value</p>
                <h3 className="text-2xl font-bold">$24,582.50</h3>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-green-500">+12.5%</span>
            </div>
          </Card>

          <Card className="p-6 bg-background border-border/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">24h Change</p>
                <h3 className="text-2xl font-bold">+$2,450</h3>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10">
                <ArrowUpRight className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-background border-border/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Trades</p>
                <h3 className="text-2xl font-bold">142</h3>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <ArrowDownLeft className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-background border-border/40">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Assets</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
              <div className="p-3 rounded-lg bg-primary/10">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-background border-border/40">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border/20">
              <div>
                <p className="font-medium">BTC → ETH</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <span className="text-green-500 font-medium">+0.25 ETH</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border/20">
              <div>
                <p className="font-medium">ETH → USDC</p>
                <p className="text-sm text-muted-foreground">5 hours ago</p>
              </div>
              <span className="text-green-500 font-medium">+1250 USDC</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Home;
