/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffeaef',
          100: '#ffd5d9',
          200: '#ffabb3',
          300: '#ff818d',
          400: '#ff5766',
          500: '#ff2d40',
          600: '#e50019',
          700: '#b80018',
          800: '#8B0000', // Dark Red
          900: '#5c0000',
        },
        secondary: {
          50: '#ede9fe',
          100: '#ddd6fe',
          200: '#c4b5fd',
          300: '#a78bfa',
          400: '#8b5cf6',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#2e1065',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e2e2e6',
          200: '#c5c5ce',
          300: '#a6a6b4',
          400: '#8a8a9c',
          500: '#71718a',
          600: '#5a5a72',
          700: '#46465c',
          800: '#343447',
          900: '#1a1a23',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(139, 0, 0, 0.8), rgba(46, 16, 101, 0.8))',
      },
    },
  },
  plugins: [],
};