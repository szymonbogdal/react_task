// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Add paths for JS/TS/JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        'background': '#dee2e6',
        'main': '#014f86',
        'secondary': '#014f86',
      }
    },
  },
  plugins: [],
}