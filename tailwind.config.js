/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'], // Custom font family
      },
      colors: {
        'custom-teal': 'rgb(13 114 123)',
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
        // Add dark mode specific colors
        gray: {
          100: '#f7fafc',
          900: '#1a202c',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')", // Custom background image
      },
      transitionProperty: {
        height: 'height', // Add transition for height changes
      },
    },
  },
  plugins: [],
};
