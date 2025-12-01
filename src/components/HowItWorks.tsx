import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Coins, DollarSign, Repeat } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Coins,
    title: "Select Tokens",
    description: "Choose which cryptocurrency you want to swap from and to. We support 50+ tokens including BTC, ETH, SOL, and more.",
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Enter Amount",
    description: "Input the amount you want to swap. Our system instantly calculates the conversion rate with no hidden fees.",
  },
  {
    number: "03",
    icon: Repeat,
    title: "Execute Swap",
    description: "Confirm and execute your swap. Transactions complete in seconds with full transparency and security.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to swap your crypto
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <Card className="glass-card p-8 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow text-center h-full">
                <div className="mb-6 inline-flex p-4 rounded-full bg-gradient-primary relative">
                  <step.icon className="h-8 w-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-background text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
