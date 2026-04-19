# Arbitrum Web3 Explorer

A polished educational Web3 application focused on **Arbitrum Layer 2** and core blockchain fundamentals. It combines conceptual learning, live market data, and an interactive mining simulator in one unified dark-themed dashboard.

## Tech Stack

- React (functional components)
- Vite
- React Router DOM
- Tailwind CSS
- Plain JavaScript
- Web Crypto API (SHA-256 hashing)

## Installation & Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Pages

1. **Home**
   - Hero overview of Arbitrum Layer 2
   - Feature cards (speed, low fees, security)
   - Ethereum scaling problem and Layer 2 solution
   - Key Arbitrum benefits

2. **Concepts**
   - Web2 vs Web3
   - Ethereum vs Bitcoin
   - Public Key vs Private Key
   - Blockchain vs Traditional Database

3. **Prices**
   - Live BTC and ETH prices from CoinGecko
   - 24h change with green/red indicators
   - Refresh button, loading and error states
   - Last updated timestamp

4. **Simulator**
   - Two-block blockchain simulation
   - Hashing rule: `sha256(data + nonce + previousHash)`
   - Mining rule: hash must start with `00`
   - Block 2 depends on Block 1 hash
   - Valid/invalid visual feedback with color states

## Key Features

- Unified modern Web3 dark UI
- Responsive layout for mobile and desktop
- Reusable component architecture
- Immediate block validity feedback
- Educational design suitable for demos and viva discussion

## Limitations

- Price data depends on public CoinGecko API availability/rate limits
- Simulator demonstrates core concepts and is not a full blockchain implementation
