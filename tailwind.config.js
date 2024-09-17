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
        'primary': '#023e8a',
        'secondary': '#0077b6',
      }
    },
  },
  plugins: [],
}