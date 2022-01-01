module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      colors: {
        'darkBlue': '#081839',
        'lightGreen': '#09CCA9',
        'white': '#fff',
      },
    },
  },
  plugins: [],
}