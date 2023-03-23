/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        active: "#D1D6DB",
        focus: "#C2E7FF",
        hover: "#E1E5EA",
        shadow: "#00000078"
      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        mplus: ["M PLUS Rounded 1c", "sans-serif"]
      }
    },
  },
  plugins: [],
};
