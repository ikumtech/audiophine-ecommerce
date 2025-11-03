// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A',
        accent: '#FBAF85',
        black: '#000000',
        dark: '#101010',
        light: '#F1F1F1',
        offwhite: '#FAFAFA',
        white: '#FFFFFF',
        error: '#CD2C2C',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
