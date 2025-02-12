/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1 : "#F4EEFF",
        color2 : "#DCD6F7",
        color3 : "#A6B1E1",
        color4 : "#424874"
      },
    },
  },
  plugins: [],
};
