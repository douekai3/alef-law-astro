/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f7ff",
          100: "#e6efff",
          200: "#c5dbff",
          300: "#a4c7ff",
          400: "#6fa6ff",
          500: "#3a85ff",
          600: "#2f6ad9",
          700: "#2451a6",
          800: "#193873",
          900: "#0f2040"
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
