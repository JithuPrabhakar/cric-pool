/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d012d", // Dark Blue
        secondary: "#194276", // Light Blue
        accent: "#27AE60", // Teal/Greenish Blue
        muted: "#6b6b6b", // Light Gray
      },
    },
    boxShadow: {
      "3xl":
        "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
    },
  },
  plugins: [],
}
