/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#060a13',
          900: '#0b1120',
          850: '#0f172a',
          800: '#131c31',
          750: '#182239',
          700: '#1e293b',
          600: '#334155',
          500: '#475569',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          purple: '#a855f7',
          pink: '#ec4899',
        },
        glow: {
          blue: 'rgba(59,130,246,0.15)',
          indigo: 'rgba(99,102,241,0.15)',
          violet: 'rgba(139,92,246,0.15)',
          cyan: 'rgba(6,182,212,0.12)',
          emerald: 'rgba(16,185,129,0.15)',
          red: 'rgba(239,68,68,0.15)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
        'grid-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        'dot-pattern': `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59,130,246,0.15), 0 0 60px rgba(59,130,246,0.05)',
        'glow-indigo': '0 0 20px rgba(99,102,241,0.15), 0 0 60px rgba(99,102,241,0.05)',
        'glow-violet': '0 0 20px rgba(139,92,246,0.15), 0 0 60px rgba(139,92,246,0.05)',
        'glow-emerald': '0 0 20px rgba(16,185,129,0.2), 0 0 60px rgba(16,185,129,0.06)',
        'glow-red': '0 0 20px rgba(239,68,68,0.2), 0 0 60px rgba(239,68,68,0.06)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.15), 0 0 60px rgba(6,182,212,0.05)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
        'card': '0 4px 24px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03)',
        'card-hover': '0 8px 40px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.1)',
        'elevated': '0 20px 60px -15px rgba(0,0,0,0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-up-delay-1': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s forwards',
        'slide-up-delay-2': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s forwards',
        'slide-up-delay-3': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
        'slide-up-delay-4': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(99,102,241,0.15)' },
          '50%': { borderColor: 'rgba(99,102,241,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
