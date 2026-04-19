import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/concepts', label: 'Concepts' },
  { to: '/prices', label: 'Prices' },
  { to: '/simulator', label: 'Simulator' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/90 py-4 backdrop-blur">
      <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-bold tracking-tight text-white">Arbitrum Web3 Explorer</p>
          <p className="text-sm text-slate-400">Layer 2 & Blockchain Fundamentals</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
