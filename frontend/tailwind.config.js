/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-wheat":
          "0 0 2px #fff, inset 0 0 2px #fff, 0 0 5px #f5deb3, 0 0 15px #f5deb3, 0 0 30px #f5deb3",
      },
    },
  },
  plugins: [require("daisyui")],
};
