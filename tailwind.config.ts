import type { Config } from 'tailwindcss';
// import {red, black} from "next/dist/lib/picocolors";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        red: {
          50: '#ffe5e5',
          100: '#fbbaba',
          200: '#f28e8e',
          300: '#FFD6D6',
          400: '#FF1A1A',
          500: '#FF0000',
          600: '#E60000',
          700: '#8b0606',
          800: '#650404',
          900: '#400202',
        },
        black: {
          50: '#f7f7f7',
          100: '#e1e1e1',
          200: '#cfcfcf',
          300: '#b1b1b1',
          400: '#9e9e9e',
          500: '#7e7e7e',
          600: '#626262',
          700: '#515151',
          800: '#3b3b3b',
          900: '#222222',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
