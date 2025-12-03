import { DashboardLayout } from '@/components/DashboardLayout';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const TransactionsCompleted = () => {
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
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold gradient-text">Completed Transactions</h1>
            </div>
            <p className="text-muted-foreground">View all confirmed transactions</p>
          </div>

          <Card className="glass-card p-6 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Completed Transactions</h3>
            <p className="text-muted-foreground">Completed transactions will appear here.</p>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default TransactionsCompleted;
