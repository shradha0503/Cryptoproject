import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { User, Mail, Shield, LogOut } from 'lucide-react';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl space-y-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Profile</h1>
          <p className="text-muted-foreground">Manage your account settings</p>
        </div>

        <Card className="p-8 bg-background border-border/40">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">John Doe</h2>
              <p className="text-muted-foreground">john@example.com</p>
              <p className="text-sm text-green-500 mt-2">Verified Account</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-background border-border/40">
          <h3 className="text-lg font-bold mb-4">Account Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">john@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">2FA Status</p>
                <p className="font-medium text-green-500">Enabled</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-background border-border/40">
          <h3 className="text-lg font-bold mb-4">Settings</h3>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start h-12">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start h-12">
              Notification Settings
            </Button>
            <Button variant="outline" className="w-full justify-start h-12">
              Privacy Settings
            </Button>
          </div>
        </Card>

        <Button className="w-full bg-red-500 hover:bg-red-600 text-white h-12 gap-2">
          <LogOut className="h-5 w-5" />
          Sign Out
        </Button>
      </motion.div>
    </div>
  );
};

export default Profile;
