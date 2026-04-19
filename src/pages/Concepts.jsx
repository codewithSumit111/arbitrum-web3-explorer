import ComparisonCard from '../components/ComparisonCard'

const comparisons = [
  {
    title: 'Web2 vs Web3',
    leftTitle: 'Web2',
    rightTitle: 'Web3',
    leftPoints: ['Platform-owned data', 'Login with email/password', 'Centralized servers'],
    rightPoints: ['User-owned wallets', 'Cryptographic identity', 'Decentralized networks'],
  },
  {
    title: 'Ethereum vs Bitcoin',
    leftTitle: 'Ethereum',
    rightTitle: 'Bitcoin',
    leftPoints: ['Programmable smart contracts', 'Ecosystem for DeFi/NFTs', 'General-purpose blockchain'],
    rightPoints: ['Focused on digital money', 'Simple scripting language', 'Store-of-value narrative'],
  },
  {
    title: 'Public Key vs Private Key',
    leftTitle: 'Public Key',
    rightTitle: 'Private Key',
    leftPoints: ['Can be shared safely', 'Generates wallet addresses', 'Receives funds'],
    rightPoints: ['Must remain secret', 'Signs transactions', 'Controls wallet ownership'],
  },
  {
    title: 'Blockchain vs Traditional Database',
    leftTitle: 'Blockchain',
    rightTitle: 'Traditional DB',
    leftPoints: ['Append-only records', 'Distributed verification', 'Tamper-resistant history'],
    rightPoints: ['Editable rows and tables', 'Single admin control', 'Optimized for speed and querying'],
  },
]

function Concepts() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Web3 Concepts, Simplified</h1>
        <p className="mt-2 text-slate-300">Quick side-by-side comparisons for beginners and viva discussions.</p>
      </section>

      <section className="grid gap-4">
        {comparisons.map((comparison) => (
          <ComparisonCard key={comparison.title} {...comparison} />
        ))}
      </section>
    </div>
  )
}

export default Concepts
