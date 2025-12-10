import { NavLink } from "react-router-dom";
import { Home, Wallet, RefreshCcw, User } from "lucide-react";

export default function Sidebar() {
  const links = [
    { label: "Home", to: "/", icon: Home },
    { label: "Wallet", to: "/wallet", icon: Wallet },
    { label: "Swap", to: "/swap", icon: RefreshCcw },
    { label: "Profile", to: "/profile", icon: User },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 fixed left-0 top-16 h-[calc(100vh-4rem)]
                      bg-white/20 dark:bg-black/20 backdrop-blur-xl border-r border-white/20 shadow-lg p-4">

      <nav className="mt-4 flex flex-col gap-2">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-xl transition-all
                ${isActive ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md" :
                "text-gray-700 dark:text-gray-200 hover:bg-white/10"}`
              }
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
