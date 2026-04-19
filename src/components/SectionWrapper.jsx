/**
 * SectionWrapper — consistent section container with optional background effects.
 *
 * @param {{ children: React.ReactNode, id?: string, dark?: boolean, className?: string }} props
 */
export default function SectionWrapper({ children, id, dark = false, className = "" }) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 overflow-hidden ${
        dark ? "bg-dark-900/40" : ""
      } ${className}`}
    >
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />
      <div className="page-container relative z-10">{children}</div>
    </section>
  );
}
