/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'day-background': "url('/img/ui/wallpaper-day.jpg')",
      }
    },
  },
  plugins: [],
}

