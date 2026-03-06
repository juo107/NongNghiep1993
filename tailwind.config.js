/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4ade80', // green-400
                    DEFAULT: '#16a34a', // green-600
                    dark: '#15803d', // green-700
                }
            }
        },
    },
    plugins: [],
}
