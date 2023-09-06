import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: '#0252CD',
        primaryDark: '#428DFF',
        secondary: '#FFBE62',
        black200: '#151E2C',
        black300: '#192333',
        black400: '#778295',
        white500: '#6F74A7',
        white800: '#F3F8FF',
        white900: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
