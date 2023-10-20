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
          100: '#4A4A4A',
          900: '#1a202c',
        }
      },
      backgroundColor: {
        'page-background': '#F6F6FE',
        borderRadius: {
          '4xl': '2rem',
        },
        fontSize: {
          'sm': ['14px', '20px'],
          'base': ['16px', '24px'],
        },
      },
      fontFamily: {
        'primary': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
    plugins: [],
  }
};
