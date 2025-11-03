// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      letterSpacing: {
        widest: '0.25em',
        wider: '0.1em',
        wide: '0.05em',
      },
    },
  },
  plugins: [],
};

export default config;
