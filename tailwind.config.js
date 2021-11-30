module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-purp': '#72506B',
        'mute-purp': '#8A5A68',
        'off-white': '#D4CAD5',
        teal: '#008080',
        orange: '#FFA500',
        yellow: '#FFFF00',
        grey: '#808080',
        green: '#22C55E',
        red: '#EF4444',
        pink: '#EC4899',
        brown: '#964B00',
      },
    },
    variants: {},
    plugins: [],
  },
};
