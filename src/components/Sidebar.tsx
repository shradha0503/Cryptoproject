import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Wallet, ArrowLeftRight, Settings, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: {
    label: string;
    path: string;
  }[];
}

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      path: '/',
    },
    {
      id: 'wallet',
      label: 'Wallet',
      icon: <Wallet className="h-5 w-5" />,
      children: [
        { label: 'My Wallet', path: '/wallet' },
        { label: 'Deposit', path: '/wallet/deposit' },
        { label: 'Withdraw', path: '/wallet/withdraw' },
      ],
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: <ArrowLeftRight className="h-5 w-5" />,
      children: [
        { label: 'All Transactions', path: '/transactions/all' },
        { label: 'Pending', path: '/transactions/pending' },
        { label: 'Completed', path: '/transactions/completed' },
      ],
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="h-5 w-5" />,
      children: [
        { label: 'Profile', path: '/settings/profile' },
        { label: 'Security', path: '/settings/security' },
        { label: 'Preferences', path: '/settings/preferences' },
      ],
    },
  ];

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isParentActive = (item: MenuItem) => {
    if (item.path) return isActive(item.path);
    return item.children?.some(child => isActive(child.path)) || false;
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden glass-card border-primary/20"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed left-0 top-0 h-screen z-40 glass-card border-r border-primary/20',
          'flex flex-col overflow-hidden',
          'md:translate-x-0 md:static'
        )}
        style={{ width: '280px' }}
      >
        <div className="p-6 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold gradient-text">CryptoSwap</h2>
              <p className="text-xs text-muted-foreground">Navigation</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.path) {
                    handleNavigation(item.path);
                  } else if (item.children) {
                    toggleDropdown(item.id);
                  }
                }}
                className={cn(
                  'w-full flex items-center justify-between px-4 py-3 rounded-lg',
                  'transition-all duration-200 group',
                  'hover:bg-primary/10 hover:border-primary/30',
                  isParentActive(item)
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'text-foreground border border-transparent'
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn(
                    'transition-colors',
                    isParentActive(item) ? 'text-white' : 'text-primary'
                  )}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.children && (
                  <motion.div
                    animate={{ rotate: openDropdown === item.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                )}
              </button>

              <AnimatePresence>
                {item.children && openDropdown === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-1 ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                      {item.children.map((child) => (
                        <button
                          key={child.path}
                          onClick={() => handleNavigation(child.path)}
                          className={cn(
                            'w-full text-left px-4 py-2 rounded-lg text-sm',
                            'transition-all duration-200',
                            'hover:bg-primary/10 hover:text-primary',
                            isActive(child.path)
                              ? 'bg-primary/20 text-primary font-medium'
                              : 'text-muted-foreground'
                          )}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-border/30">
          <div className="glass-card p-3 rounded-lg border border-primary/20">
            <p className="text-xs text-muted-foreground mb-1">Quick Tip</p>
            <p className="text-xs">Use keyboard shortcuts to navigate faster</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};
