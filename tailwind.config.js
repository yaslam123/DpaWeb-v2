/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
    addUtilities({
        '.rotate-y-180': {
            transform: 'rotateY(180deg)',
        },
    });
});
module.exports = {
    variants: {
        extend: {
            backgroundColor: ['group-hover'], // ensure background color changes on hover
            rotate: ['group-hover'], // ensure rotation changes on hover
            textColor: ['group-hover'], // ensure text color changes on hover
            transform: ['group-hover'], // enable transforms on hover
            scale: ['group-hover'], // if you want to scale elements
            display: ['group-hover'], // for showing or hiding elements
        },
    },
    plugins: [
        // plugins you are using
    ],
};
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1142px',
        },

        fontFamily: {
            mulish: ['Mulish', 'sans-serif'],
            reey: ['reey', 'sans-serif'],
        },

        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#061829',
            primary: '#47BDFF',
            secondary: '#34C2F1',
            gray: {
                DEFAULT: '#7780A1',
                dark: '#1C2331',
            },
        },
        extend: {
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray'),
                        fontSize: '1.125rem',
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/line-clamp'), rotateX, require('@tailwindcss/typography')],
};
