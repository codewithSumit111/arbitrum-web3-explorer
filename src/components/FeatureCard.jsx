/**
 * FeatureCard — polished feature display with icon glow.
 */
export default function FeatureCard({ icon, title, description, index = 0 }) {
  const delayClass = [
    "",
    "animate-delay-100",
    "animate-delay-200",
    "animate-delay-300",
    "animate-delay-400",
  ][index] || "";

  return (
    <div
      className={`group glass-card-hover p-7 text-center opacity-0 animate-slide-up ${delayClass}`}
      id={`feature-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Icon with glow */}
      <div className="relative w-16 h-16 mx-auto mb-5">
        {/* Background glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-indigo/20 to-accent-blue/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-indigo/10 to-accent-blue/5 border border-accent-indigo/15 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-accent-indigo/30 transition-all duration-500">
          {icon}
        </div>
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
