/**
 * ComparisonCard — premium side-by-side concept comparison.
 */
export default function ComparisonCard({ title, icon, left, right }) {
  return (
    <div
      className="group glass-card-hover overflow-hidden"
      id={`comparison-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Header with gradient accent */}
      <div className="relative px-6 py-5 border-b border-white/[0.05]">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-indigo/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-center justify-center gap-3">
          {icon && <span className="text-xl">{icon}</span>}
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.04]">
        {/* Left */}
        <div className="p-6 hover:bg-white/[0.01] transition-colors duration-300">
          <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold tracking-wide mb-4 ${left.color}`}>
            {left.label}
          </span>
          <ul className="space-y-3">
            {left.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="p-6 hover:bg-white/[0.01] transition-colors duration-300">
          <span className={`inline-block px-3 py-1 rounded-lg text-xs font-bold tracking-wide mb-4 ${right.color}`}>
            {right.label}
          </span>
          <ul className="space-y-3">
            {right.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent-indigo shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
