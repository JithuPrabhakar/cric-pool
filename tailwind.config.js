/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3ebf5',
          100: '#e4cde8',
          200: '#c89ad1',
          300: '#ab66ba',
          400: '#8f33a3',
          500: '#35004a',
          600: '#2d0040',
          700: '#240034',
          800: '#1c0028',
          900: '#14001e',
        },
        'russian-violet': {
          DEFAULT: '#1d012d',
          2: '#35004a',
          3: '#21012e',
        },
        black: '#050007',
        'persian-indigo': '#320165',
        white: '#fffcfe',
        blue: '#194276',
      },
    },
  },
  plugins: [],
}
