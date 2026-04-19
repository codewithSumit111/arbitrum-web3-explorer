function FeatureCard({ title, description, icon }) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-400/50">
      <p className="mb-3 text-2xl">{icon}</p>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </article>
  )
}

export default FeatureCard
