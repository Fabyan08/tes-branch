/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#272B35",
        second: "#5FAEC4",
        grey: "#252B42",
        grey2: "#737373"
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
