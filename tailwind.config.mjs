/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      light: {
        100: "#eceff4",
        200: "#e5e9f0",
        300: "#d8dee9",
      },
      dark: {
        100: "#434c5e",
        200: "#3b4252",
        300: "#2e3440",
      },
      red: "#bf616a",
      green: "#a3be8c",
      yellow: "#ebcb8b",
      purple: "#b48ead",
      blue: "#81a1c1",
    },
    extend: {},
  },
  plugins: [],
};
