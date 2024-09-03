/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./public/**/*.js"],
  theme: {
    extend: {
      height: {
        fullPage: "calc(100vh - 125px)",
      },
    },
  },
  plugins: [],
};
