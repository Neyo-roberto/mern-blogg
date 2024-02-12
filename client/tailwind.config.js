import flowbitePlugin from 'flowbite/plugin'; // Assuming 'flowbite/plugin' is an ES module

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin],
};

export default config;
