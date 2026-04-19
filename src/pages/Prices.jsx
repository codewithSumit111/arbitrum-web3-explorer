import { useCallback, useEffect, useState } from 'react'
import PriceCard from '../components/PriceCard'
import { fetchCryptoPrices } from '../utils/api'

function Prices() {
  const [prices, setPrices] = useState([])
  const [lastUpdated, setLastUpdated] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadPrices = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const data = await fetchCryptoPrices()
      setPrices(data)
      setLastUpdated(new Date())
    } catch (err) {
      setError(err.message || 'Failed to fetch prices. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadPrices()
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [loadPrices])

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Live Crypto Prices</h1>
          <p className="mt-2 text-slate-300">Tracking Bitcoin and Ethereum via CoinGecko API.</p>
          {lastUpdated && <p className="mt-2 text-sm text-slate-400">Last updated: {lastUpdated.toLocaleTimeString()}</p>}
        </div>
        <button
          onClick={loadPrices}
          disabled={loading}
          className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Refreshing...' : 'Refresh Prices'}
        </button>
      </section>

      {loading && <p className="rounded-2xl bg-slate-800/70 p-6 text-slate-300">Loading market data...</p>}

      {error && (
        <p className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-6 text-rose-300">
          {error}
        </p>
      )}

      {!loading && !error && (
        <section className="grid gap-4 md:grid-cols-2">
          {prices.map((item) => (
            <PriceCard
              key={item.symbol}
              name={item.name}
              symbol={item.symbol}
              price={item.price}
              change={item.change24h}
            />
          ))}
        </section>
      )}
    </div>
  )
}

export default Prices
