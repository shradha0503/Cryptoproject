import { NavLink } from "react-router-dom";
import { Home, Wallet, RefreshCcw, User } from "lucide-react";

export default function BottomNav() {
  const tabs = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/wallet", icon: Wallet, label: "Wallet" },
    { to: "/swap", icon: RefreshCcw, label: "Swap" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 bg-white/30 dark:bg-black/30 backdrop-blur-xl
                    border-t border-white/20 shadow-xl md:hidden flex items-center justify-around z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-xs transition
              ${isActive ? "text-blue-600 font-semibold" : "text-gray-600 dark:text-gray-300"}`
            }
          >
            <Icon className="w-6 h-6" />
            {tab.label}
          </NavLink>
        );
      })}
    </nav>
  );
}
