/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf4ff',
          100: '#cce4ff',
          200: '#99caff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#2b7efc',
          600: '#2064d3',
          700: '#174cac',
          800: '#0f3686',
          900: '#092261',
        },
      },
    },
  },
  plugins: [],
}
