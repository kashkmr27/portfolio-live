/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
        './src/app/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                violet: '#7C3AED',
                'violet-600': '#6D28D9',
                teal: '#06B6D4',
                'teal-500': '#14B8A6',
                'ink-950': '#0B0F1A',
                'ink-900': '#0F172A',
                'eerie-black': '#1E1E1E',
                gainsboro: '#E5E7EB',
                'chinese-black': '#0B0F14',
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
} 