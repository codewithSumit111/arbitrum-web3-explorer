export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] mt-auto overflow-hidden">
      {/* Subtle glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-indigo/40 to-transparent" />

      <div className="page-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-blue blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-accent-indigo to-accent-blue flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
            </div>
            <span className="font-semibold text-white text-sm tracking-tight">
              Arbitrum Web3 Explorer
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
            <span>
              Built by{" "}
              <span className="text-gray-300 font-medium">Your Name</span>
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-dark-600" />
            <span>
              Batch:{" "}
              <span className="text-gray-300 font-medium">2024–2025</span>
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-dark-600" />
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-accent-blue transition-colors duration-300"
              id="footer-github"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.03] text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Arbitrum Web3 Explorer · Built for educational purposes
        </div>
      </div>
    </footer>
  );
}
