/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        mplus: ["M PLUS Rounded 1c", "sans-serif"]
      }
    },
  },
  plugins: [],
};
