/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime': {
          500: '#84cc16', // Lime accent color
        },
        'slate': {
          900: '#1e293b', // Text and borders
          600: '#475569', // Secondary text
        },
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'blur-in-500': 'blur-in 0.5s ease-out forwards',
        'blur-in-700': 'blur-in 0.7s ease-out forwards',
        'blur-in-900': 'blur-in 0.9s ease-out forwards',
        'spin-slow': 'spin 40s linear infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'blob': 'blob 20s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(5deg)',
          },
        },
        'blur-in': {
          '0%': {
            opacity: '0',
            filter: 'blur(10px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '0.05',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.1',
            transform: 'scale(1.05)',
          },
        },
        'blob': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
        },
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #1e293b',
        'brutal-lime': '4px 4px 0px 0px #84cc16',
      },
      borderRadius: {
        'brutal': '30px',
      },
    },
  },
  plugins: [],
}
