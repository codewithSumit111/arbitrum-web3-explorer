/**
 * GradientButton — animated gradient button with hover shimmer.
 *
 * @param {{ children: React.ReactNode, variant?: 'primary'|'secondary', onClick?: Function, className?: string, id?: string, disabled?: boolean }} props
 */
export default function GradientButton({
  children,
  variant = "primary",
  onClick,
  className = "",
  id,
  disabled = false,
  ...rest
}) {
  const cls = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${cls} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      id={id}
      {...rest}
    >
      {children}
    </button>
  );
}
