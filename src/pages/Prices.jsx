import { useState, useEffect, useCallback } from "react";
import { fetchPrices } from "../utils/api";
import PriceCard from "../components/PriceCard";
import SectionWrapper from "../components/SectionWrapper";
import BadgePill from "../components/BadgePill";
import GlassCard from "../components/GlassCard";

export default function Prices() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);
    setError(null);
    try {
      const json = await fetchPrices();
      setData(json);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message || "Failed to fetch prices");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  return (
    <div className="relative noise-overlay">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-radial from-accent-cyan/[0.08] to-transparent rounded-full blur-3xl pointer-events-none" />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <BadgePill color="cyan" className="mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
              Live Data
            </BadgePill>
            <h1 className="section-heading">
              Crypto <span className="gradient-text-cyan">Prices</span>
            </h1>
            <p className="section-subheading">
              Real-time prices powered by the CoinGecko API.
            </p>
          </div>

          {/* ── Loading ── */}
          {loading && (
            <div className="flex flex-col items-center gap-5 py-24" id="prices-loading">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full border-2 border-accent-indigo/20" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-indigo animate-spin" />
              </div>
              <span className="text-gray-500 text-sm font-medium">Fetching latest prices…</span>
            </div>
          )}

          {/* ── Error ── */}
          {error && !loading && (
            <GlassCard className="p-8 text-center border-red-500/20" id="prices-error">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-red-500/10 border border-red-500/15 flex items-center justify-center text-xl">
                ⚠️
              </div>
              <p className="text-red-400 font-medium mb-2">Connection Error</p>
              <p className="text-gray-500 text-sm mb-6">{error}</p>
              <button onClick={() => load()} className="btn-primary" id="prices-retry">
                Retry
              </button>
            </GlassCard>
          )}

          {/* ── Data ── */}
          {data && !loading && (
            <>
              <div className={`grid gap-6 sm:grid-cols-2 mb-8 transition-opacity duration-500 ${refreshing ? "opacity-50" : "opacity-100"}`}>
                <PriceCard
                  name="Bitcoin"
                  symbol="BTC"
                  icon="₿"
                  price={data.bitcoin.usd}
                  change={data.bitcoin.usd_24h_change}
                />
                <PriceCard
                  name="Ethereum"
                  symbol="ETH"
                  icon="⟠"
                  price={data.ethereum.usd}
                  change={data.ethereum.usd_24h_change}
                />
              </div>

              {/* Meta row */}
              <GlassCard className="px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                {lastUpdated && (
                  <span className="text-xs text-gray-500 flex items-center gap-2" id="prices-last-updated">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Last updated:{" "}
                    {lastUpdated.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </span>
                )}
                <button
                  onClick={() => load(true)}
                  disabled={refreshing}
                  className="btn-secondary text-xs !px-4 !py-2"
                  id="prices-refresh"
                >
                  <svg
                    className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  {refreshing ? "Refreshing…" : "Refresh"}
                </button>
              </GlassCard>
            </>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
