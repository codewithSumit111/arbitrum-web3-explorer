/**
 * PriceCard — premium crypto price display with glow effects.
 */
export default function PriceCard({ name, symbol, price, change, icon }) {
  const positive = change >= 0;

  return (
    <div
      className="group glass-card-hover p-7 relative overflow-hidden"
      id={`price-${symbol.toLowerCase()}`}
    >
      {/* Background glow depending on change direction */}
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
          positive ? "bg-emerald-500/10" : "bg-red-500/10"
        }`}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          {/* Icon */}
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-indigo/20 to-accent-blue/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-accent-indigo/10 to-accent-blue/5 border border-accent-indigo/15 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-accent-indigo/30 transition-all duration-500">
              {icon}
            </div>
          </div>

          {/* Change badge */}
          <span
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold ${
              positive
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                : "bg-red-500/10 text-red-400 border border-red-500/15"
            }`}
          >
            <svg
              className={`w-3 h-3 ${positive ? "" : "rotate-180"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {Math.abs(change).toFixed(2)}%
          </span>
        </div>

        {/* Name */}
        <p className="text-sm text-gray-500 mb-1 font-medium">
          {name}{" "}
          <span className="text-gray-600 uppercase text-xs">({symbol})</span>
        </p>

        {/* Price */}
        <p className="text-3xl font-extrabold text-white tracking-tight">
          $
          {price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
    </div>
  );
}
