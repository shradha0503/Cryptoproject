import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-crypto.jpg";
import { SwapWidget } from "./SwapWidget";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 crypto-grid opacity-30" />
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card border-primary/30 rounded-full">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Lightning Fast Swaps</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Swap Crypto{" "}
              <span className="gradient-text">Instantly</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Experience the future of decentralized trading. Convert your digital assets seamlessly with real-time rates and AI-powered assistance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="btn-glow bg-gradient-primary border-0 text-white font-bold group"
                onClick={() => scrollToSection("how-it-works")}
              >
                Start Swapping
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10"
                onClick={() => scrollToSection("features")}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold gradient-text">$2.4B+</div>
                <div className="text-sm text-muted-foreground">Total Volume</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold gradient-text">150K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Tokens</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Swap Widget */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="animate-float">
              <SwapWidget />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
