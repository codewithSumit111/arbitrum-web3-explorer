import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";
import FeatureCard from "../components/FeatureCard";
import BadgePill from "../components/BadgePill";
import GlassCard from "../components/GlassCard";

// ── Data ──────────────────────────────────────────────────────────────────
const features = [
  {
    icon: "⚡",
    title: "Faster Transactions",
    description:
      "Arbitrum processes transactions off-chain in batches, reducing confirmation times from minutes to sub-second finality.",
  },
  {
    icon: "💰",
    title: "Lower Gas Fees",
    description:
      "By bundling hundreds of transactions into a single Ethereum proof, gas costs drop by up to 90%.",
  },
  {
    icon: "🛡️",
    title: "Ethereum Security",
    description:
      "Arbitrum inherits Ethereum's battle-tested security model — your assets stay protected by the L1 consensus.",
  },
];

const problems = [
  {
    icon: "🚧",
    title: "Network Congestion",
    text: "Ethereum mainnet processes only ~15 TPS, creating long queues during peak usage.",
  },
  {
    icon: "🔥",
    title: "High Gas Fees",
    text: "A single token swap can cost $20 – $200, pricing out everyday users and micro-transactions.",
  },
  {
    icon: "📉",
    title: "Scalability Limits",
    text: "DeFi, gaming, and NFTs all compete for block space — Ethereum alone can't handle mass adoption.",
  },
];

const solutions = [
  {
    q: "What is Layer 2?",
    a: "A separate network on top of Ethereum (Layer 1). It processes transactions faster and cheaper, then posts a compact proof back to Ethereum so everything stays verifiable.",
    icon: "🔗",
  },
  {
    q: "How does Arbitrum work?",
    a: "Arbitrum uses Optimistic Rollups — it executes transactions off-chain and assumes they're valid. If someone suspects fraud, they can challenge the result on L1. Instant speed, Ethereum-grade security.",
    icon: "⚙️",
  },
  {
    q: "What are Rollups?",
    a: 'Rollups bundle ("roll up") hundreds of transactions into a single compressed proof submitted to Ethereum. Fees drop dramatically because you share the L1 cost with the entire batch.',
    icon: "📦",
  },
];

const benefits = [
  { emoji: "🚀", label: "Faster", desc: "Sub-second finality for most transactions" },
  { emoji: "🪙", label: "Cheaper", desc: "Fraction-of-a-cent gas fees" },
  { emoji: "📈", label: "Scalable", desc: "Thousands of TPS without congestion" },
  { emoji: "🧑‍💻", label: "Dev Friendly", desc: "Full EVM compatibility — deploy Solidity as-is" },
];

// ── Component ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="relative noise-overlay">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-32 sm:pb-40">
        {/* Ambient glow blobs */}
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-radial from-accent-indigo/[0.12] via-accent-violet/[0.04] to-transparent rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute top-40 -left-40 w-80 h-80 bg-accent-blue/[0.06] rounded-full blur-3xl pointer-events-none animate-float-slow" />
        <div className="absolute top-20 -right-40 w-80 h-80 bg-accent-violet/[0.06] rounded-full blur-3xl pointer-events-none animate-float" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

        <div className="page-container text-center relative z-10">
          <div className="opacity-0 animate-fade-in">
            <BadgePill color="indigo" className="mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
              Layer 2 Scaling on Ethereum
            </BadgePill>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-7 opacity-0 animate-slide-up tracking-tight">
            Understand{" "}
            <span className="gradient-text">Arbitrum</span>
            <br className="hidden sm:block" />
            &amp; Blockchain{" "}
            <span className="gradient-text-cyan">Fundamentals</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up animate-delay-200 leading-relaxed">
            A visual, interactive guide to Layer 2 scaling, Web3 concepts, live
            crypto prices, and a hands-on block mining simulator.
          </p>

          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-up animate-delay-300">
            <Link to="/simulator" className="btn-primary" id="hero-cta-simulator">
              Launch Simulator
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link to="/concepts" className="btn-secondary" id="hero-cta-concepts">
              Explore Concepts
            </Link>
          </div>

          {/* Decorative bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ═══════════════════ FEATURES ═══════════════════ */}
      <SectionWrapper id="features-section">
        <div className="text-center mb-16">
          <BadgePill color="cyan" className="mb-5">Why Arbitrum</BadgePill>
          <h2 className="section-heading">
            The Leading <span className="gradient-text">Layer 2</span>
          </h2>
          <p className="section-subheading">
            Arbitrum makes Ethereum practical for everyday use with speed, savings, and security.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i + 1} />
          ))}
        </div>
      </SectionWrapper>

      {/* ═══════════════════ PROBLEM ═══════════════════ */}
      <SectionWrapper dark id="problem-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <BadgePill color="red" className="mb-5">The Problem</BadgePill>
            <h2 className="section-heading">
              Ethereum's <span className="text-red-400">Growing Pains</span>
            </h2>
            <p className="section-subheading">
              Ethereum revolutionised decentralised computing — but success brought pain.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {problems.map((item, i) => (
              <GlassCard hover glow="red" key={item.title} className="p-7 text-center">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ═══════════════════ SOLUTION ═══════════════════ */}
      <SectionWrapper id="solution-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <BadgePill color="emerald" className="mb-5">The Solution</BadgePill>
            <h2 className="section-heading">
              Enter <span className="gradient-text">Layer 2</span>
            </h2>
            <p className="section-subheading">
              Arbitrum moves the heavy lifting off Ethereum while keeping its security guarantees.
            </p>
          </div>

          <div className="space-y-5">
            {solutions.map((item) => (
              <GlassCard hover glow="indigo" key={item.q} className="p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-accent-indigo/10 border border-accent-indigo/15 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{item.q}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ═══════════════════ BENEFITS ═══════════════════ */}
      <SectionWrapper dark id="benefits-section">
        <div className="text-center mb-16">
          <BadgePill color="violet" className="mb-5">Key Benefits</BadgePill>
          <h2 className="section-heading">
            Unlock Ethereum's <span className="gradient-text-warm">Full Potential</span>
          </h2>
          <p className="section-subheading">
            Arbitrum empowers developers and users with next-gen blockchain performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <GlassCard
              hover
              glow="indigo"
              key={b.label}
              className={`p-7 text-center opacity-0 animate-slide-up animate-delay-${(i + 1) * 100}`}
            >
              <div className="text-3xl mb-4">{b.emoji}</div>
              <h3 className="text-base font-bold text-white mb-1">{b.label}</h3>
              <p className="text-sm text-gray-400">{b.desc}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
