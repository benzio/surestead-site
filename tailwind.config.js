module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
      borderRadius: {
        'none': '0',
        'sm': '0',
        'md': '0',
        'lg': '0',
        'xl': '0',
        '2xl': '0',
        '3xl': '0',
        'full': '0',
      },
    },
  },
  plugins: [],
}; 