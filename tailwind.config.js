/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F3E8F', // Deep indigo blue - headings, logos, main buttons, links
        'royal-blue': '#3F5AA9', // Royal blue - hover states, icons, borders
        'soft-blue': '#6F85C7', // Soft blue - hover states, icons, borders, cards
        'pale-blue': '#AEBCE6', // Pale blue - subtle backgrounds, shadows, inactive elements
        'warm-cream': '#E9D6B8', // Warm cream - highlights, badges, labels
        'off-white': '#F6F7FB', // Soft off-white - optional sections
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'elegant': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

