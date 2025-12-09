import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Wallet, ArrowUpRight, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Wallet', icon: Wallet, path: '/wallet' },
    { label: 'Swap', icon: ArrowUpRight, path: '/swap' },
    { label: 'Profile', icon: User, path: '/profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose?.();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={onClose}
        />
      )}

      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 z-30 bg-background border-r border-border/40',
          'flex flex-col',
          'lg:static lg:translate-x-0 lg:top-0 lg:h-[calc(100vh-4rem)]'
        )}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <span className="font-bold gradient-text">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <motion.button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                  'hover:bg-primary/10',
                  active
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'text-foreground hover:text-primary'
                )}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={cn('h-5 w-5', active ? 'text-white' : 'text-primary')} />
                <span className={cn('font-medium', active && 'text-white')}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/30">
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 text-sm">
            <p className="text-xs text-muted-foreground mb-1">Version</p>
            <p className="font-medium">1.0.0</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};
