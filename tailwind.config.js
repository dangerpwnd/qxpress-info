module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-purp': '#72506B',
        'mute-purp': '#8A5A68',
        'off-white': '#D4CAD5',
        'teal-500': '#008080',
        'orange-500': '#FFA500',
        'yellow-500': '#FFFF00',
        'grey-500': '#808080',
      },
    },
    variants: {},
    plugins: [],
  },
};
