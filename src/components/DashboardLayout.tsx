import Sidebar from '@/components/Sidebar';
import { Header } from '@/components/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="md:hidden">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
      </div>
    </div>
  );
};
