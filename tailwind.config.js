/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#230537',
        text: '#FFFFFF',
        textAccent: '#8A939B',
        textSecondary: '#9A29D6',
        secondary: '#9A29D6',
        accent: '#3E1362A1',
        blacks: '#010101'
      },
    },
  },
  plugins: [],
}

