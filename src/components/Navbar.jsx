import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/concepts", label: "Concepts", icon: "📚" },
  { to: "/prices", label: "Prices", icon: "📊" },
  { to: "/simulator", label: "Simulator", icon: "⛓️" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Detect scroll for background blur intensity
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="page-container flex items-center justify-between h-16 lg:h-[72px]">
        {/* ── Logo ── */}
        <NavLink to="/" className="flex items-center gap-2.5 group" id="nav-logo">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-blue blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-accent-indigo to-accent-blue flex items-center justify-center text-white font-black text-sm shadow-lg">
              A
            </div>
          </div>
          <span className="font-bold text-lg text-white hidden sm:inline tracking-tight">
            Arbitrum <span className="gradient-text">Explorer</span>
          </span>
        </NavLink>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-xl rounded-xl p-1 border border-white/[0.05]">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                id={`nav-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-gradient-to-r from-accent-indigo/20 to-accent-blue/10 text-white shadow-inner-glow border border-white/[0.06]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative p-2 rounded-xl hover:bg-white/[0.05] transition-all duration-300 group"
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
            <span
              className={`block h-[2px] w-5 bg-gray-300 transition-all duration-300 ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-gray-300 transition-all duration-300 ${
                open ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-gray-300 transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/[0.06] bg-dark-950/95 backdrop-blur-2xl">
          <ul className="page-container py-4 space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-accent-indigo/10 text-white border border-accent-indigo/15"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }`
                  }
                >
                  <span className="text-base">{l.icon}</span>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
