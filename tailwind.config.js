/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          dark: '#140306',
          wine: '#24070e',
          maroon: '#350b14',
          crimson: '#4a0e1c',
          gold: '#d4af37',
          goldLight: '#f4e5a9',
          goldBright: '#ffd700',
          goldMuted: '#bfa15f',
          goldDark: '#8b6914',
          cream: '#fff9ea',
        }
      },
      fontFamily: {
        tamil: ['"Noto Serif Tamil"', '"Anek Tamil"', 'serif'],
        tamilSans: ['"Noto Sans Tamil"', 'sans-serif'],
        serif: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
