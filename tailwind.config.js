module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-purp': '#72506B',
        'mute-purp': '#8A5A68',
      },
    },
    variants: {},
    plugins: [],
  },
};
