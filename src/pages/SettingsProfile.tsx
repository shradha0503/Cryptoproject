import { DashboardLayout } from '@/components/DashboardLayout';
import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const SettingsProfile = () => {
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
                <User className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold gradient-text">Profile Settings</h1>
            </div>
            <p className="text-muted-foreground">Manage your account information</p>
          </div>

          <Card className="glass-card p-6 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Profile Information</h3>
            <p className="text-muted-foreground">Profile settings will appear here.</p>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsProfile;
