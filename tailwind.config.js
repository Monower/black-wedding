/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlack: "#151623",
        gray2: "#525252",
      },
    },
  },
  plugins: [],
};

