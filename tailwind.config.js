/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          DEFAULT: '#28574E',
          dark: '#1E232F',
        },
      },
    },
  },
  plugins: [],
}

