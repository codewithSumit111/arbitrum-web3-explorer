function PriceCard({ name, symbol, price, change }) {
  const isPositive = change >= 0

  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg">
      <p className="text-sm uppercase tracking-wider text-slate-400">{symbol}</p>
      <h3 className="mt-1 text-2xl font-semibold text-white">{name}</h3>
      <p className="mt-4 text-3xl font-bold text-cyan-300">${price.toLocaleString()}</p>
      <p className={`mt-2 text-sm font-medium ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
        24h: {isPositive ? '+' : ''}
        {change.toFixed(2)}%
      </p>
    </article>
  )
}

export default PriceCard
