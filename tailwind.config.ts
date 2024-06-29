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
    },
    fontFamily: {
      sans: ['var(--font-poppins)'],
    },
    fontWeight: {
      normal: '300',
      bold: '700',
    },
  },
  plugins: [],
};
export default config;
