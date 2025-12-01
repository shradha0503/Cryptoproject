# CryptoSwap - Cryptocurrency Exchange Platform

A modern, futuristic cryptocurrency swap platform with integrated AI assistance. Built with React, TypeScript, Vite, and TailwindCSS.

## ✨ Features

- **🔄 Token Swapping**: Instant cryptocurrency conversions with real-time rate calculations
- **🤖 AI Assistant**: OpenAI-powered chatbot for crypto guidance and support
- **🎨 Modern UI**: Dark futuristic theme with neon gradients and glassmorphism
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔐 Frontend-Only**: No backend required, works with mock data

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm
- OpenAI API key (optional, for AI assistant)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd cryptoswap

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## 🔑 OpenAI API Configuration

The AI assistant uses OpenAI's API. To enable it:

1. Create a `.env.local` file in the project root
2. Add your API key:
   ```
   VITE_OPENAI_API_KEY=your_api_key_here
   ```
3. **Important**: Never commit `.env.local` to version control

### Security Warning ⚠️

**The current implementation uses frontend API integration for demonstration purposes only.**

For production use:
- ✅ Implement a backend proxy to secure API keys
- ✅ Use server-side edge functions (Supabase, Vercel, Cloudflare Workers)
- ✅ Add rate limiting and authentication
- ❌ Never expose API keys in frontend code

## 🎨 Design System

### Color Palette
- **Primary**: Neon Purple (`hsl(270 80% 65%)`)
- **Accent**: Cyan (`hsl(190 95% 50%)`)
- **Background**: Deep Space (`hsl(240 10% 3.9%)`)

### Key Technologies
- **React 18**: UI framework
- **TypeScript**: Type safety
- **TailwindCSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Shadcn/ui**: Component library
- **Lucide Icons**: Icon system

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── SwapWidget.tsx   # Main swap interface
│   ├── AIAssistant.tsx  # AI chatbot component
│   ├── Hero.tsx         # Landing hero section
│   ├── Features.tsx     # Feature showcase
│   ├── HowItWorks.tsx   # Process explanation
│   ├── AIPromo.tsx      # AI assistant promotion
│   ├── FAQ.tsx          # FAQ accordion
│   └── Footer.tsx       # Footer with links
├── pages/
│   └── Index.tsx        # Main landing page
├── assets/              # Images and static files
├── index.css           # Global styles & design system
└── App.tsx             # Root component
```

## 🎯 Component Overview

### SwapWidget
- Token selection dropdowns
- Real-time conversion calculations
- Mock balance display
- Exchange rate information

### AIAssistant
- Floating chat bubble interface
- Message history
- OpenAI API integration
- Typing indicators

### Design System
All colors and styles are defined in `src/index.css` and `tailwind.config.ts`:
- Semantic color tokens
- Gradient definitions
- Glass morphism utilities
- Animation keyframes

## 🛠️ Customization

### Mock Data
Token data and exchange rates are defined in `SwapWidget.tsx`:
```typescript
const tokens = [
  { symbol: "BTC", name: "Bitcoin", balance: "0.0542" },
  // Add more tokens here
];

const exchangeRates = {
  BTC: 43250,
  // Add more rates here
};
```

### Styling
Modify design tokens in `src/index.css`:
```css
:root {
  --primary: 270 80% 65%;
  --accent: 190 95% 50%;
  /* Add custom colors */
}
```

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

Build output will be in the `dist/` directory.

## 🔮 Future Enhancements

- [ ] Real blockchain integration (Web3.js, Ethers.js)
- [ ] Wallet connection (MetaMask, WalletConnect)
- [ ] Live market data from CoinGecko/CoinMarketCap
- [ ] Transaction history
- [ ] Price charts
- [ ] Multi-language support
- [ ] Backend API for secure operations

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please create an issue in the repository.

---

Built with ❤️ using React, TypeScript, and modern web technologies.
