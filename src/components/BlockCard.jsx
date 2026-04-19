function BlockCard({
  title,
  data,
  nonce,
  previousHash,
  hash,
  isValid,
  isMining,
  onDataChange,
  onNonceChange,
  onMine,
}) {
  return (
    <article
      className={`rounded-2xl border-2 bg-slate-800/70 p-6 shadow-lg transition ${
        isValid ? 'border-emerald-500' : 'border-rose-500'
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isValid ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
          }`}
        >
          {isValid ? 'VALID' : 'INVALID'}
        </span>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm text-slate-300">Data</span>
          <input
            value={data}
            onChange={(event) => onDataChange(event.target.value)}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 p-3 text-sm text-white outline-none transition focus:border-cyan-400"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm text-slate-300">Nonce</span>
          <input
            type="number"
            value={nonce}
            min="0"
            onChange={(event) => onNonceChange(Number(event.target.value) || 0)}
            className="w-full rounded-xl border border-slate-600 bg-slate-900 p-3 text-sm text-white outline-none transition focus:border-cyan-400"
          />
        </label>

        <div>
          <p className="mb-1 text-sm text-slate-300">Previous Hash</p>
          <p className="rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-xs text-slate-400 break-all">
            {previousHash}
          </p>
        </div>

        <div>
          <p className="mb-1 text-sm text-slate-300">Current Hash</p>
          <p className="rounded-xl border border-slate-700 bg-slate-900 p-3 font-mono text-xs text-slate-400 break-all">
            {hash || 'Not mined yet'}
          </p>
        </div>

        <button
          onClick={onMine}
          disabled={isMining}
          className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-3 font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isMining ? 'Mining...' : 'Mine Block'}
        </button>
      </div>
    </article>
  )
}

export default BlockCard
