/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'purple': '#7e77e5',
        'gray': {
          dark: '#4A4A4A',
          soft: '##999999',
        }
      },
      backgroundColor: {
        'page-background': '#F6F6FE',
        borderRadius: {
          '4xl': '2rem',
        },
        fontSize: {
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          '2xl': '1.563rem',
          '3xl': '1.953rem',
          '4xl': '2.441rem',
          '5xl': '3.052rem',
        }
      },
      fontFamily: {
        'primary': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
    plugins: [],
  }
};
