/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
      },
      backgroundImage: {
        Header : "url('/images/header/bagron.png') ",
        dekstop : "url('/images/header/bg-dekstop.png')",
        atasanmobile : "url('/images/Atasan/bg.png') ",
        atasandekstop : "url('/images/Atasan/bg-comp.png') ",

      }
    },
  },
  plugins: [],
}
