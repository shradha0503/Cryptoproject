import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Zap, Shield, TrendingUp, Bot, Wallet, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Conversions",
    description: "Execute swaps in milliseconds with our optimized routing engine. No delays, no waiting.",
  },
  {
    icon: Bot,
    title: "AI Support",
    description: "Get real-time assistance from our intelligent chatbot that understands crypto terminology.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Rates",
    description: "Access live market data and competitive exchange rates updated every second.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your transactions are encrypted end-to-end. We never store your private keys.",
  },
  {
    icon: Wallet,
    title: "Multi-Wallet Support",
    description: "Connect with MetaMask, WalletConnect, Phantom, and more popular crypto wallets.",
  },
  {
    icon: Globe,
    title: "50+ Tokens",
    description: "Swap between Bitcoin, Ethereum, Solana, BNB, USDT, and dozens of other tokens.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 crypto-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">CryptoSwap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for traders who demand speed, security, and simplicity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group h-full">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-primary">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
