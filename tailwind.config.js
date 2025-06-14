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
      fontSize: {
        'body-lg': ['2.08rem', { lineHeight: '3.33rem' }],
        'heading-xl': ['5.58rem', { lineHeight: '5.67rem' }],
      },
    },
  },
  plugins: [],
}; 