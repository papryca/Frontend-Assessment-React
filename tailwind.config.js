/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        screens: {
            xm: '320px',
            sm: '480px',
            md: '835px',
            lg: '976px',
            xl: '1440px',
        },
        extend: {
            colors: {
                'purple': '#7e77e5',
                'purple-soft': '#b7b5da',
                'purple-medium': '#E8E7F8',
                'gray': {
                    dark: '#4A4A4A',
                    soft: '#999999',
                },
                'green': {
                    'soft': '#b9d7a8',
                    'bright':'#407922'
                },
                'text': {
                    'light': '#ffffff',
                    'dark':'#407922'
                },
                'red': '#e86a74',
                'red-soft':'#e3918d',
                'red-bright':'#e0202c'
            },
            boxShadow: {
                'custom': '4px 0 #b7b5da,8px 0 #E8E7F8 ',
            },
            backgroundColor: {
                'page-background': '#F6F6FE',
                'page-background-dark': '#121212',
                'article-background-dark': '#202020',
            },
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
            },
            fontFamily: {
                'primary': ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
        plugins: [],
    }
};
