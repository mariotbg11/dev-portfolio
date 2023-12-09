/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      inset: {
        "6.5px": "-6.5px",
      },
    },
  },
  plugins: [],
};
