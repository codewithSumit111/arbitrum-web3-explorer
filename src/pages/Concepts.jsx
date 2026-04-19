import SectionWrapper from "../components/SectionWrapper";
import ComparisonCard from "../components/ComparisonCard";
import BadgePill from "../components/BadgePill";

// ── Comparison Data ──────────────────────────────────────────────────────
const comparisons = [
  {
    title: "Web2 vs Web3",
    icon: "🌐",
    left: {
      label: "Web2",
      color: "bg-gray-500/10 text-gray-300 border border-gray-500/15",
      points: [
        "Centralised servers controlled by corporations",
        "Users give up data in exchange for services",
        "Platform can censor or ban users at will",
        "Revenue flows to platform owners",
        "Login with email & password",
      ],
    },
    right: {
      label: "Web3",
      color: "bg-accent-indigo/10 text-accent-blue border border-accent-indigo/15",
      points: [
        "Decentralised networks run by participants",
        "Users own their own data and digital assets",
        "No single entity can censor content",
        "Value is distributed to the community",
        "Login with a crypto wallet (e.g. MetaMask)",
      ],
    },
  },
  {
    title: "Ethereum vs Bitcoin",
    icon: "⟠",
    left: {
      label: "Bitcoin",
      color: "bg-amber-500/10 text-amber-300 border border-amber-500/15",
      points: [
        "Digital gold — a store of value",
        "Simple scripting language",
        "Proof of Work consensus",
        "~7 transactions per second",
        "Focused on peer-to-peer payments",
      ],
    },
    right: {
      label: "Ethereum",
      color: "bg-accent-indigo/10 text-accent-blue border border-accent-indigo/15",
      points: [
        "Programmable blockchain — smart contracts",
        "Turing-complete (Solidity / Vyper)",
        "Proof of Stake consensus (since The Merge)",
        "~15 TPS (scaling via L2s like Arbitrum)",
        "Powers DeFi, NFTs, DAOs, and more",
      ],
    },
  },
  {
    title: "Public Key vs Private Key",
    icon: "🔑",
    left: {
      label: "Public Key",
      color: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/15",
      points: [
        "Derived from the private key mathematically",
        "Shared openly — like an email address",
        "Used to receive crypto or verify signatures",
        "Cannot spend funds on its own",
        "Safe to display publicly",
      ],
    },
    right: {
      label: "Private Key",
      color: "bg-red-500/10 text-red-400 border border-red-500/15",
      points: [
        "A secret 256-bit random number",
        "Must never be shared with anyone",
        "Used to sign transactions & prove ownership",
        "Grants full control of your funds",
        "If lost, assets are gone forever",
      ],
    },
  },
  {
    title: "Blockchain vs Traditional Database",
    icon: "🗄️",
    left: {
      label: "Traditional DB",
      color: "bg-gray-500/10 text-gray-300 border border-gray-500/15",
      points: [
        "Owned & operated by a single entity",
        "Data can be edited or deleted by admins",
        "Fast read/write, low latency",
        "Requires trust in the operator",
        "Private by default",
      ],
    },
    right: {
      label: "Blockchain",
      color: "bg-accent-indigo/10 text-accent-blue border border-accent-indigo/15",
      points: [
        "Distributed across thousands of nodes",
        "Immutable — once written, cannot be altered",
        "Slower writes, eventual consistency",
        "Trustless — verified by consensus",
        "Transparent & publicly auditable",
      ],
    },
  },
];

// ── Component ─────────────────────────────────────────────────────────────
export default function Concepts() {
  return (
    <div className="relative noise-overlay">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-accent-violet/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <BadgePill color="violet" className="mb-5">Core Concepts</BadgePill>
          <h1 className="section-heading">
            Blockchain <span className="gradient-text">Fundamentals</span>
          </h1>
          <p className="section-subheading">
            Side-by-side comparisons that make complex ideas clear and approachable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2 relative z-10">
          {comparisons.map((c, i) => (
            <div
              key={c.title}
              className={`opacity-0 animate-slide-up animate-delay-${(i + 1) * 100}`}
            >
              <ComparisonCard {...c} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
