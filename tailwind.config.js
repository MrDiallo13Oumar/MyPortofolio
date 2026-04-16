/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        forge: {
          bg:      '#0d0d0d',
          surface: '#141414',
          card:    '#1a1a1a',
          border:  '#2a2a2a',
          gold:    '#D4A017',
          amber:   '#E8B44B',
          glow:    '#F5C842',
          muted:   '#5a5a5a',
          soft:    '#9a9a9a',
          white:   '#F0EDE8',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Syne"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'ticker':     'ticker 25s linear infinite',
        'shimmer':    'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(212,160,23,0)' },
          '50%':      { boxShadow: '0 0 30px rgba(212,160,23,0.25)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}