/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "ui-rounded",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    fontSize: {
      "3xl": "2rem",
    },
    boxShadow: {
      custom:
        "0px 24px 24px -12px #17171705, 0px 12px 12px -6px #17171705, 0px 3px 3px -1.5px #17171705, 0px 1px 1px -0.5px #17171705, 0px 0px 0px 1px #17171705",
    },
  },
  plugins: [],
};
