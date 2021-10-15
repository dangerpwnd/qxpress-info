module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "cptx-purp": {
          50: "#875582",
          100: "#7d4b78",
          200: "#73416e",
          300: "#693764",
          400: "#5f2d5a",
          500: "#552350",
          600: "#4b1946",
          700: "#410f3c",
          800: "#370532",
          900: "#2d0028",
        },
        "cptx-lightpurp": {
          50: "#f4dbf2",
          100: "#ead1e8",
          200: "#e0c7de",
          300: "#d6bdd4",
          400: "#ccb3ca",
          500: "#c2a9c0",
          600: "#b89fb6",
          700: "#ae95ac",
          800: "#a48ba2",
          900: "#9a8198",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
