module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'mute-blue': '#475F77',
      'sand-accent': '#FEFCED',
      'mute-purp': '#c79dd7',
      'main-purp': {
        light: '#673888',
        dark: '#4d1b7b',
      },
    },
    extend: {},
    variants: {},
    plugins: [],
  },
};
