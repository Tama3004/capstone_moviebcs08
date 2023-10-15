/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      height: {
        200: "950px",
        movie: "500px"
      },
    },
  },
  plugins: [],
};
