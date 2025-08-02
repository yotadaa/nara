import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
};

export default config;
