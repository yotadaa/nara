// tailwind.config.js
import typography from "@tailwindcss/typography";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // adjust as needed
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],

};
