import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      darkBlue: '#00132F',
      lightblue: '#7395EB',
      blue: '#4242D2',
      green: '#B7B722',
      lightgreen: '#D6DB47',
      bordergreen: '#C7E503',
    },
    fontFamily: {
      sans: ['var(--font-poppins)'],
    },
    fontWeight: {
      normal: '300',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },
  plugins: [],
};
export default config;
