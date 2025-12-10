import { Link } from "react-router-dom";
import { User, Menu } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-sm border-b border-white/20 z-50 flex items-center justify-between px-4">
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        CryptoX Wallet
      </h1>

      <div className="flex items-center gap-4">
        <Link to="/profile">
          <User className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:scale-110 transition" />
        </Link>

        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200 md:hidden" />
      </div>
    </header>
  );
}
