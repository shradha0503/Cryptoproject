import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      <TopNavbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 pt-20 md:pl-64 p-4 pb-24">
          {children}
        </main>
      </div>

      <BottomNav />
    </div>
  );
};
