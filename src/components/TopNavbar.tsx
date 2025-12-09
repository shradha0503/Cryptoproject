import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Menu } from 'lucide-react';
import { useState } from 'react';

interface TopNavbarProps {
  onMenuClick?: () => void;
}

export const TopNavbar = ({ onMenuClick }: TopNavbarProps) => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group"
          >
            <div className="p-2 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all">
              <span className="text-xl font-bold text-white">C</span>
            </div>
            <span className="text-lg font-bold gradient-text hidden sm:inline">CryptoSwap</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                <button
                  onClick={() => {
                    navigate('/profile');
                    setIsProfileOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors"
                >
                  Profile Settings
                </button>
                <hr className="my-2 border-border/30" />
                <button
                  onClick={() => setIsProfileOpen(false)}
                  className="w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors text-red-500"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
