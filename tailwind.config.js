module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'surestead-green': '#d6f5b0', // Adjust as needed
        'surestead-dark': '#444444',  // Adjust as needed
      },
    },
  },
  plugins: [],
}; 