import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AIPromo } from "@/components/AIPromo";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <AIPromo />
        <FAQ />
        <Footer />
        <AIAssistant />
      </div>
    </div>
  );
};

export default Index;
