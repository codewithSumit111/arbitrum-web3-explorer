/**
 * BadgePill — small label chip used for section tags.
 *
 * @param {{ children: React.ReactNode, color?: 'indigo'|'cyan'|'emerald'|'violet'|'amber'|'red', className?: string }} props
 */
const colorMap = {
  indigo: "bg-accent-indigo/10 text-accent-blue border-accent-indigo/15",
  cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/15",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/15",
  violet: "bg-accent-violet/10 text-accent-violet border-accent-violet/15",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/15",
  red: "bg-red-500/10 text-red-400 border-red-500/15",
};

export default function BadgePill({ children, color = "indigo", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border backdrop-blur-sm ${colorMap[color] || colorMap.indigo} ${className}`}
    >
      {children}
    </span>
  );
}
