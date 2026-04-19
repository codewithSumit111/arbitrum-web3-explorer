const COINGECKO_ENDPOINT =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'

export async function fetchCryptoPrices() {
  const response = await fetch(COINGECKO_ENDPOINT)

  if (!response.ok) {
    throw new Error('CoinGecko API is unavailable right now.')
  }

  const data = await response.json()

  return [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: data.bitcoin.usd,
      change24h: data.bitcoin.usd_24h_change,
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: data.ethereum.usd,
      change24h: data.ethereum.usd_24h_change,
    },
  ]
}
