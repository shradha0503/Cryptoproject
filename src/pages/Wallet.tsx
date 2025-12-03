import { DashboardLayout } from '@/components/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Wallet as WalletIcon, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Wallet = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-lg bg-gradient-primary">
                <WalletIcon className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold gradient-text">My Wallet</h1>
            </div>
            <p className="text-muted-foreground">Manage your cryptocurrency portfolio</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="glass-card p-6 border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
                  <h3 className="text-2xl font-bold">$10,000.00</h3>
                </div>
                <div className="p-2 rounded-lg bg-primary/10">
                  <WalletIcon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-green-500">+5.2%</span>
                <span className="text-muted-foreground">this month</span>
              </div>
            </Card>

            <Card className="glass-card p-6 border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Available</p>
                  <h3 className="text-2xl font-bold">$8,450.00</h3>
                </div>
                <div className="p-2 rounded-lg bg-green-500/10">
                  <ArrowDownRight className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Ready to trade</p>
            </Card>

            <Card className="glass-card p-6 border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">In Orders</p>
                  <h3 className="text-2xl font-bold">$1,550.00</h3>
                </div>
                <div className="p-2 rounded-lg bg-accent/10">
                  <ArrowUpRight className="h-5 w-5 text-accent" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Locked in trades</p>
            </Card>
          </div>

          <Card className="glass-card p-6 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Wallet Overview</h3>
            <p className="text-muted-foreground">Your complete wallet details and transaction history will appear here.</p>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Wallet;
