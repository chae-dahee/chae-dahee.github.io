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
        // 하늘색 포인트 색상 팔레트
        primary: {
          50: "#e0f2fe",
          100: "#bae6fd",
          200: "#7dd3fc",
          300: "#38bdf8",
          400: "#0ea5e9",
          500: "#0284c7",
          600: "#0369a1",
        },
        secondary: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
        },
        accent: {
          100: "#fde68a",
          200: "#fcd34d",
          300: "#fbbf24",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      animation: {
        typing:
          "fadeIn 0.5s forwards 0.3s, typing 2s steps(40, end) 0.3s forwards",
        typingSecond:
          "fadeIn 0.5s forwards 2.5s, typing 2s steps(40, end) 2.5s forwards",
        blink: "blink 0.75s step-end infinite",
        float: "float 3s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        sky: "0 4px 14px 0 rgba(14, 165, 233, 0.2)",
        "sky-lg": "0 10px 30px 0 rgba(14, 165, 233, 0.3)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
