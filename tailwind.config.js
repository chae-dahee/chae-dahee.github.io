/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: '#B0AFA6',
        light: '#9E9D92',
        dark: '#78776A',
        textLight: '#4A5568', // text-gray-600
        textDark: '#1F2937',  // text-gray-900
      },
    },
  },
  plugins: [],
};
