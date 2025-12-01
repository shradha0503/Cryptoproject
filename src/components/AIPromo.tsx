import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Bot, MessageCircle, Sparkles } from "lucide-react";

export const AIPromo = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 crypto-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card p-8 lg:p-12 border-primary/30">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 glass-card border-accent/30 rounded-full">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">AI-Powered Assistance</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold">
                    Your Personal <span className="gradient-text">Crypto Guide</span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    Not sure how crypto swaps work? Our AI assistant is here to help! Get instant answers about:
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Understanding cryptocurrency terminology",
                      "Best practices for token swapping",
                      "Real-time market insights",
                      "Step-by-step guidance",
                    ].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right: Mock Chat UI */}
                <div className="relative">
                  <div className="glass-card p-6 border-primary/30 rounded-2xl space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">AI Assistant</div>
                        <div className="text-xs text-muted-foreground">Always ready to help</div>
                      </div>
                    </div>

                    {/* Mock Messages */}
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex justify-end"
                      >
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-sm">What's the difference between BTC and ETH?</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex justify-start"
                      >
                        <div className="glass-card border-border/30 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[85%]">
                          <p className="text-sm">
                            Bitcoin (BTC) is primarily digital gold—a store of value. Ethereum (ETH) is a platform for decentralized apps and smart contracts. Both have unique purposes! 🚀
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="flex justify-end"
                      >
                        <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                          <p className="text-sm">How do I swap them?</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Typing Indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-xs">AI is typing...</span>
                    </motion.div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-2xl -z-10" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
