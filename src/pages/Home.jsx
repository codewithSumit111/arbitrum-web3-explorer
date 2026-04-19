import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'

const features = [
  {
    title: 'Faster Transactions',
    description: 'Arbitrum batches many transactions together for quick confirmations and smoother dApp UX.',
    icon: '⚡',
  },
  {
    title: 'Lower Gas Fees',
    description: 'Users share Layer 1 costs across batches, making transfers and smart contract calls much cheaper.',
    icon: '��',
  },
  {
    title: 'Ethereum Security',
    description: 'Arbitrum posts data to Ethereum, inheriting strong decentralization and settlement guarantees.',
    icon: '🛡️',
  },
]

function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-700 bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-violet-500/20 p-8 shadow-lg">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">Understand Arbitrum Layer 2, Visually</h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          Learn how Layer 2 scaling solves Ethereum bottlenecks with a modern dashboard focused on real concepts,
          live market data, and hands-on blockchain simulation.
        </p>
        <Link
          to="/simulator"
          className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
        >
          Try Block Simulator
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-white">The Problem on Ethereum L1</h2>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>• Network congestion during peak demand slows transaction inclusion.</li>
            <li>• Gas fees spike and can make smaller transactions uneconomical.</li>
            <li>• Scaling solely on Layer 1 is difficult without trade-offs.</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-white">The Layer 2 Solution</h2>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>• Layer 2 executes transactions off-chain and posts results to Ethereum.</li>
            <li>• Arbitrum uses optimistic rollups to batch many user operations.</li>
            <li>• Rollups reduce costs while preserving Ethereum as the final security layer.</li>
          </ul>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-white">Why Builders Choose Arbitrum</h2>
        <div className="mt-4 grid gap-3 text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          <p className="rounded-xl bg-slate-900/70 p-4">Faster final user experience for dApps</p>
          <p className="rounded-xl bg-slate-900/70 p-4">Cheaper transactions for frequent interactions</p>
          <p className="rounded-xl bg-slate-900/70 p-4">Scalable throughput for growing ecosystems</p>
          <p className="rounded-xl bg-slate-900/70 p-4">Developer-friendly EVM compatibility</p>
        </div>
      </section>
    </div>
  )
}

export default Home
