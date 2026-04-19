# Arbitrum Web3 Explorer

> An interactive educational web application exploring **Arbitrum Layer 2 scaling** and **Blockchain fundamentals**.

---

## 🖥️ Tech Stack

| Layer         | Technology                        |
| ------------- | --------------------------------- |
| Framework     | React 19 (Functional Components)  |
| Build Tool    | Vite 8                            |
| Routing       | React Router DOM v7               |
| Styling       | Tailwind CSS 3                    |
| Language      | JavaScript (no TypeScript)        |
| Hashing       | Web Crypto API (`SHA-256`)        |
| Price Data    | CoinGecko Public REST API         |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The app will open at `http://localhost:5173`.

---

## 📄 Pages

### 1. Home (`/`)
An overview of Arbitrum Layer 2 — why it exists, how it works, and the benefits it brings:
- **Hero** — headline + CTA
- **Features** — Faster Transactions, Lower Gas Fees, Ethereum Security
- **Problem** — Ethereum congestion, gas costs, scalability limits
- **Solution** — Layer 2, Optimistic Rollups, batching explained simply
- **Benefits** — Faster, Cheaper, Scalable, Developer Friendly

### 2. Concepts (`/concepts`)
Four side-by-side comparison cards:
- Web2 vs Web3
- Ethereum vs Bitcoin
- Public Key vs Private Key
- Blockchain vs Traditional Database

### 3. Live Prices (`/prices`)
Real-time cryptocurrency prices via the **CoinGecko API**:
- Bitcoin (BTC) & Ethereum (ETH)
- 24h percentage change (green / red indicators)
- Refresh button & last-updated timestamp
- Loading spinner & error handling

### 4. Block Simulator (`/simulator`)
An interactive **blockchain mining demo**:
- Two linked blocks (Block 1 → Block 2)
- Edit data & nonce, see the SHA-256 hash update in real time
- **Mine** button auto-increments the nonce until the hash starts with `"00"` (proof-of-work)
- Chain dependency — changing Block 1 automatically invalidates Block 2
- Green / red borders for instant validity feedback

---

## ✨ Features

- 🌙 Modern dark theme with glass-morphism cards
- 📱 Fully responsive (mobile → desktop)
- ⚡ Smooth animations & hover effects
- 🔐 Client-side SHA-256 hashing (Web Crypto API — no backend)
- 🔗 Chain integrity visualisation with tamper detection
- 📊 Live API integration with graceful error states

---

## ⚠️ Limitations

- **No backend / database** — everything is client-side.
- **CoinGecko rate limits** — the free API may throttle after heavy usage.
- **Simplified mining** — difficulty is set to `"00"` for quick demos; real PoW requires far more leading zeros.
- **Two-block chain** — demonstrates the concept; real blockchains have thousands of linked blocks.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FeatureCard.jsx
│   ├── ComparisonCard.jsx
│   ├── PriceCard.jsx
│   └── BlockCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Concepts.jsx
│   ├── Prices.jsx
│   └── Simulator.jsx
├── utils/
│   ├── hash.js
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📝 License

Built for educational & academic purposes.
