import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AIPromo } from "@/components/AIPromo";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { DashboardLayout } from "@/components/DashboardLayout";

const Index = () => {
  return (
    <DashboardLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <AIPromo />
      <FAQ />
      <Footer />
      <AIAssistant />
    </DashboardLayout>
  );
};

export default Index;
