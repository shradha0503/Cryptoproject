import { DashboardLayout } from '@/components/DashboardLayout';
import { Card } from '@/components/ui/card';
import { Sliders } from 'lucide-react';
import { motion } from 'framer-motion';

const SettingsPreferences = () => {
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
                <Sliders className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold gradient-text">Preferences</h1>
            </div>
            <p className="text-muted-foreground">Customize your experience</p>
          </div>

          <Card className="glass-card p-6 border-primary/20">
            <h3 className="text-xl font-bold mb-4">User Preferences</h3>
            <p className="text-muted-foreground">Preference settings will appear here.</p>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPreferences;
