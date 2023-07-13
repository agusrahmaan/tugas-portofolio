/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/background.jpg')",
      }
    },
  },
  plugins: [],
}

