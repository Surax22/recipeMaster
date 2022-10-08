/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://uploads-ssl.webflow.com/61afa26ea9679749c4df3249/61edd934713b7a7904ad29a5_Page-header-Contact2.jpg')",
      },
  },
  },
  plugins: [],
}
