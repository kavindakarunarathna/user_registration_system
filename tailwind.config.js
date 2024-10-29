/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#205387',
        secondary: '#ff9900',
        accent: '#ff9900',
        grayaccent: '#7c7979',
        lightgray: '#d9d9d9',
      },
    },
  },
  plugins: [],
}

