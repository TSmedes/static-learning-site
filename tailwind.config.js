/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'intro-img': 'url("/images/home_header.jpg")',
      }
    },
  },
  plugins: [],
}

