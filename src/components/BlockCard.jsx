import { useState, useEffect, useRef, useCallback } from "react";
import { sha256 } from "../utils/hash";

/**
 * BlockCard — premium interactive block mining simulator.
 *
 * Props:
 * - index: block number
 * - previousHash: hash from the preceding block
 * - onHashChange: callback when this block's hash updates
 * - expectedPreviousHash: for chain-validity checking
 */
export default function BlockCard({ index, previousHash, onHashChange, expectedPreviousHash }) {
  const [data, setData] = useState("Hello, Arbitrum!");
  const [nonce, setNonce] = useState(0);
  const [hash, setHash] = useState("");
  const [mining, setMining] = useState(false);
  const miningRef = useRef(false);

  const DIFFICULTY = "00";

  // ── Recompute hash on any input change ────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const h = await sha256(`${data}${nonce}${previousHash}`);
      if (!cancelled) {
        setHash(h);
        onHashChange(h);
      }
    })();
    return () => { cancelled = true; };
  }, [data, nonce, previousHash, onHashChange]);

  // ── Validity ──────────────────────────────────────────────────
  const hashValid = hash.startsWith(DIFFICULTY);
  const chainValid = expectedPreviousHash == null || previousHash === expectedPreviousHash;
  const valid = hashValid && chainValid;

  // ── Mining routine ────────────────────────────────────────────
  const mine = useCallback(async () => {
    setMining(true);
    miningRef.current = true;
    let n = 0;
    while (miningRef.current) {
      const h = await sha256(`${data}${n}${previousHash}`);
      if (h.startsWith(DIFFICULTY)) {
        setNonce(n);
        setHash(h);
        onHashChange(h);
        break;
      }
      n++;
      if (n % 200 === 0) await new Promise((r) => setTimeout(r, 0));
    }
    setMining(false);
    miningRef.current = false;
  }, [data, previousHash, onHashChange]);

  useEffect(() => () => { miningRef.current = false; }, []);

  // ── Visual states ─────────────────────────────────────────────
  const borderColor = valid
    ? "border-emerald-500/30"
    : "border-red-500/30";
  const glowShadow = valid
    ? "shadow-glow-emerald"
    : "shadow-glow-red";
  const statusBg = valid
    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    : "bg-red-500/10 text-red-400 border-red-500/20";

  return (
    <div
      className={`relative group glass-card border-2 ${borderColor} ${glowShadow} p-6 sm:p-7 transition-all duration-500`}
      id={`block-${index}`}
    >
      {/* Top glow line */}
      <div
        className={`absolute top-0 left-4 right-4 h-px ${
          valid
            ? "bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
        }`}
      />

      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black ${
              valid
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-red-500/10 text-red-400 border border-red-500/20"
            }`}
          >
            #{index}
          </div>
          <h3 className="text-lg font-bold text-white">Block {index}</h3>
        </div>
        <span className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${statusBg}`}>
          {valid ? "✓ Valid" : "✗ Invalid"}
        </span>
      </div>

      {/* ── Data ── */}
      <label className="block mb-5">
        <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-1.5 block">
          Data
        </span>
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          rows={2}
          className="w-full rounded-xl bg-dark-900/80 border border-white/[0.06] px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent-indigo/40 focus:ring-2 focus:ring-accent-indigo/10 transition-all duration-300 resize-none"
          placeholder="Enter block data…"
          id={`block-${index}-data`}
        />
      </label>

      {/* ── Nonce ── */}
      <label className="block mb-5">
        <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-1.5 block">
          Nonce
        </span>
        <input
          type="number"
          value={nonce}
          onChange={(e) => setNonce(Number(e.target.value))}
          className="w-full rounded-xl bg-dark-900/80 border border-white/[0.06] px-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent-indigo/40 focus:ring-2 focus:ring-accent-indigo/10 transition-all duration-300"
          id={`block-${index}-nonce`}
        />
      </label>

      {/* ── Previous Hash ── */}
      <div className="mb-5">
        <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-1.5 block">
          Previous Hash
        </span>
        <div className="rounded-xl bg-dark-900/80 border border-white/[0.06] px-4 py-3 text-xs text-gray-500 font-mono break-all select-all leading-relaxed">
          {previousHash}
        </div>
      </div>

      {/* ── Current Hash ── */}
      <div className="mb-6">
        <span className="text-[11px] uppercase tracking-widest text-gray-500 font-bold mb-1.5 block">
          Hash
        </span>
        <div
          className={`rounded-xl border px-4 py-3 text-xs font-mono break-all select-all leading-relaxed transition-all duration-500 ${
            hashValid
              ? "bg-emerald-500/[0.04] border-emerald-500/20 text-emerald-300"
              : "bg-red-500/[0.04] border-red-500/20 text-red-300"
          }`}
        >
          {hash || "computing…"}
        </div>
      </div>

      {/* ── Mine Button ── */}
      <button
        onClick={mine}
        disabled={mining}
        className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 ${
          mining
            ? "bg-accent-indigo/15 text-accent-blue border border-accent-indigo/20 cursor-wait"
            : "btn-primary"
        }`}
        id={`block-${index}-mine`}
      >
        {mining ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Mining…
          </span>
        ) : (
          "⛏ Mine Block"
        )}
      </button>
    </div>
  );
}
