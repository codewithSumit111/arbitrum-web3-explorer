/**
 * Fetch live cryptocurrency prices from the CoinGecko public API.
 * Returns price and 24h change data for Bitcoin and Ethereum.
 */

const COINGECKO_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true";

/**
 * @typedef {Object} CoinData
 * @property {number} usd - Current price in USD.
 * @property {number} usd_24h_change - 24-hour percentage change.
 */

/**
 * @typedef {Object} PriceResponse
 * @property {CoinData} bitcoin
 * @property {CoinData} ethereum
 */

/**
 * Fetch prices from CoinGecko.
 * @returns {Promise<PriceResponse>}
 */
export async function fetchPrices() {
  const response = await fetch(COINGECKO_API);
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}
