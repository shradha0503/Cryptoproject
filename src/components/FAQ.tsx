import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a crypto swap?",
    answer:
      "A crypto swap is the direct exchange of one cryptocurrency for another without converting to fiat currency. It's faster and more efficient than traditional trading methods, allowing you to instantly convert between digital assets.",
  },
  {
    question: "Is this platform secure?",
    answer:
      "Yes! We use industry-standard encryption and never store your private keys. All transactions are processed through secure smart contracts on the blockchain. Your funds remain in your control at all times.",
  },
  {
    question: "Which tokens are supported?",
    answer:
      "We support 50+ popular cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Binance Coin (BNB), USDT, USDC, and many more. Our token list is constantly expanding based on user demand.",
  },
  {
    question: "What are the fees?",
    answer:
      "We charge a competitive 0.3% swap fee, which is one of the lowest in the industry. There are no hidden fees, and you'll see the exact amount you'll receive before confirming any transaction.",
  },
  {
    question: "How long do swaps take?",
    answer:
      "Most swaps complete within seconds to a few minutes, depending on blockchain network congestion. Our optimized routing ensures you get the fastest possible execution times.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account required! Simply connect your existing crypto wallet (MetaMask, WalletConnect, Phantom, etc.) and start swapping immediately. This keeps the process simple and your data private.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about crypto swapping
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-primary/20 px-6 rounded-lg"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
