function ComparisonCard({ title, leftTitle, rightTitle, leftPoints, rightPoints }) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-400/30 bg-slate-900/80 p-4">
          <h4 className="mb-3 font-semibold text-cyan-300">{leftTitle}</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {leftPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-violet-400/30 bg-slate-900/80 p-4">
          <h4 className="mb-3 font-semibold text-violet-300">{rightTitle}</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            {rightPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ComparisonCard
