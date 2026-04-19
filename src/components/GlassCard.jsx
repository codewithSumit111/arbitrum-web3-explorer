/**
 * GlassCard — Premium glassmorphism container with optional glow.
 *
 * @param {{ children: React.ReactNode, hover?: boolean, glow?: 'indigo'|'cyan'|'emerald'|'red'|null, className?: string }} props
 */
export default function GlassCard({ children, hover = false, glow = null, className = "" }) {
  const glowMap = {
    indigo: "hover:shadow-glow-indigo hover:border-accent-indigo/25",
    cyan: "hover:shadow-glow-cyan hover:border-accent-cyan/25",
    emerald: "hover:shadow-glow-emerald hover:border-emerald-500/25",
    red: "hover:shadow-glow-red hover:border-red-500/25",
  };

  const baseClass = hover ? "glass-card-hover" : "glass-card";
  const glowClass = glow && glowMap[glow] ? glowMap[glow] : "";

  return (
    <div className={`${baseClass} ${glowClass} ${className}`}>
      {children}
    </div>
  );
}
