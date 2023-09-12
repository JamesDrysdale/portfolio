import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
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
        black100: '#4f4f4f',
        black200: '#151E2C',
        black300: '#192333',
        black400: '#778295',
        white500: '#6F74A7',
        white800: '#F3F8FF',
        white900: '#FFFFFF',
      },
      lineHeight: {
        loose105: '105%',
        loose115: '115%',
        loose130: '130%',
        loose155: '155%',
        loose160: '160%',
      },
    },
  },
  plugins: [],
};
export default config;
