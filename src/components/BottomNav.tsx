import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Wallet, ArrowUpRight, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Wallet', icon: Wallet, path: '/wallet' },
    { label: 'Swap', icon: ArrowUpRight, path: '/swap' },
    { label: 'Profile', icon: User, path: '/profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border/40 lg:hidden">
      <div className="flex items-center justify-around h-20">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-200',
                active
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              <Icon className={cn('h-6 w-6', active && 'text-gradient-primary')} />
              <span className={cn(
                'text-xs font-medium',
                active && 'text-primary'
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
