/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ['./app/*.{js,jsx,ts,tsx}'],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                "primary": "#1C1C1F",
                "background": "#FFFFFF",
                "placeholder": "#3C3C43",
                "logo": "#F5C702",
                "border": "#EAECF0",
                "light": "#9FA5C0",
                "link": "#007AFF",
                "input": "#FCFCFD"
            },
            padding: {
                "default": "30"
            },
            rounded: {
                "border": "8"
            },
            gap: {
                "default": "25px",
                "header": "4px",
                "small": "8px",
            },
            h: {
                "input": "52"
            },
            size: {
                "icon-small": "17",
            },
            fontSize: {
                "h1": "28px",
                "h2": "24px",
                "h3": "20px",
                "button": "30px",
                "p": "15px",
            }

        },
    },
    plugins: [],
}