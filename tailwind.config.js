/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "solink-green": "#114b5f",
        "solink-blue": "#456990",
        "solink-nyanza": "#e4fde1",
        "solink-rose": "#f45b69",
        "solink-wine": "#6b2737",
      },
    },
  },
  plugins: [],
};
