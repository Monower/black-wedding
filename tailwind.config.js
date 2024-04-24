/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlack: "#151623",
        gray2: "#525252",
      },
      screens: {
        '2xl': '1440px',
      },
    },
    fontFamily: {
      'mona-sans': ['mona-sans', 'sans-serif'],
    }
  },
  plugins: [],
};

