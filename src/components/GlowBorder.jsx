/**
 * GlowBorder — animated gradient border wrapper.
 * Wraps children in a glowing animated border.
 *
 * @param {{ children: React.ReactNode, color?: 'indigo'|'emerald'|'red'|'cyan', active?: boolean, className?: string }} props
 */
const gradientMap = {
  indigo: "from-accent-indigo/40 via-accent-violet/20 to-accent-blue/40",
  emerald: "from-emerald-500/40 via-emerald-400/20 to-teal-500/40",
  red: "from-red-500/40 via-red-400/20 to-orange-500/40",
  cyan: "from-accent-cyan/40 via-accent-blue/20 to-accent-indigo/40",
};

export default function GlowBorder({ children, color = "indigo", active = true, className = "" }) {
  const gradient = gradientMap[color] || gradientMap.indigo;

  return (
    <div className={`relative group ${className}`}>
      {/* Outer glow — visible when active */}
      {active && (
        <div
          className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${gradient} opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-500`}
        />
      )}
      {/* Inner content */}
      <div className="relative">{children}</div>
    </div>
  );
}
