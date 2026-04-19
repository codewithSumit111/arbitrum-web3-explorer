import { useState, useCallback } from "react";
import BlockCard from "../components/BlockCard";
import SectionWrapper from "../components/SectionWrapper";
import BadgePill from "../components/BadgePill";
import GlassCard from "../components/GlassCard";

/**
 * Simulator page — two chained blocks demonstrating:
 *  - SHA-256 hashing
 *  - Proof-of-work mining (difficulty "00")
 *  - Chain dependency (Block 2 depends on Block 1's hash)
 *  - Tamper detection (editing Block 1 invalidates Block 2)
 */
export default function Simulator() {
  const GENESIS =
    "0000000000000000000000000000000000000000000000000000000000000000";

  const [block1Hash, setBlock1Hash] = useState("");
  const [block2PrevHash, setBlock2PrevHash] = useState("");

  const handleBlock1HashChange = useCallback((hash) => {
    setBlock1Hash(hash);
    setBlock2PrevHash(hash);
  }, []);

  return (
    <div className="relative noise-overlay">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-emerald-500/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-accent-indigo/[0.04] rounded-full blur-3xl pointer-events-none" />

      <SectionWrapper>
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <BadgePill color="emerald" className="mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Interactive
            </BadgePill>
            <h1 className="section-heading">
              Block <span className="gradient-text">Simulator</span>
            </h1>
            <p className="section-subheading">
              Mine blocks, observe hash changes, and see how the chain enforces integrity.
            </p>
          </div>

          {/* Instructions */}
          <GlassCard className="p-6 sm:p-7 mb-10" id="simulator-instructions">
            <h2 className="text-white font-bold mb-4 text-base flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent-indigo/10 border border-accent-indigo/15 flex items-center justify-center text-sm">
                📖
              </span>
              How it works
            </h2>
            <ol className="list-none space-y-3">
              {[
                <>Each block's <span className="text-accent-blue font-semibold">hash</span> is computed from its data, nonce, and previous hash using <code className="text-accent-cyan bg-accent-cyan/10 px-1.5 py-0.5 rounded text-xs font-bold">SHA-256</code>.</>,
                <>A block is <span className="text-emerald-400 font-semibold">valid</span> only when its hash starts with <code className="text-accent-cyan bg-accent-cyan/10 px-1.5 py-0.5 rounded text-xs font-bold">"00"</code> (proof-of-work difficulty).</>,
                <>Click <span className="text-white font-semibold">Mine Block</span> to auto-increment the nonce until the difficulty is satisfied.</>,
                <><span className="text-white font-semibold">Block 2</span> chains to <span className="text-white font-semibold">Block 1</span> — editing Block 1 invalidates Block 2, demonstrating <span className="text-red-400 font-semibold">tamper detection</span>.</>,
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                  <span className="shrink-0 w-6 h-6 rounded-lg bg-accent-indigo/10 border border-accent-indigo/15 flex items-center justify-center text-xs font-bold text-accent-blue mt-0.5">
                    {i + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </GlassCard>

          {/* Blocks */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px">
              <div className="w-full h-full bg-gradient-to-b from-emerald-500/20 via-accent-indigo/20 to-emerald-500/20" />
              {/* Arrow indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-dark-800 border border-white/[0.06] flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="opacity-0 animate-slide-up">
                <BlockCard
                  index={1}
                  previousHash={GENESIS}
                  onHashChange={handleBlock1HashChange}
                />
              </div>
              <div className="opacity-0 animate-slide-up animate-delay-200">
                <BlockCard
                  index={2}
                  previousHash={block2PrevHash || GENESIS}
                  onHashChange={() => {}}
                  expectedPreviousHash={block1Hash}
                />
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-xs text-gray-500">
            <span className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500/50 shadow-glow-emerald" />
              Valid block (hash starts with "00")
            </span>
            <span className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-red-500/50 shadow-glow-red" />
              Invalid block
            </span>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
