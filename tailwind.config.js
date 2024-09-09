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
        bg: "#B0AFA6",
        light: "#9E9D92",
        dark: "#78776A",
        textLight: "#4A5568", // text-gray-600
        textDark: "#1F2937", // text-gray-900
      },
      animation: {
        typing: "fadeIn 1s forwards 1s , typing 4s steps(40, end) 1s forwards",
        typingSecond:
          "fadeIn 1s forwards 5s, typing 4s steps(40, end) 5s forwards",
        blink: "blink 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blink: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
