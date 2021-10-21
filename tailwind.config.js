module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'mute-blue': '#5B7887',
      'bright-blue': '#00798F',
      'mute-green': '#62875B',
      'bright-green': '#1A8A0F',
      'mute-brown': '#876A5B',
      'mute-purp': '#805B87',
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
