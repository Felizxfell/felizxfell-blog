/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/icons/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lemon: '#b2e243',
        'green-sheet': '#68d981',
        'green-pistache': '#68d981',
        'blue-sky': '#37d1d9',
        'blue-aqua': '#4ba9fa',
      },
      backgroundImage: {
      },
    },
    container: {
      padding: '1.2rem',
    }
  },
  plugins: [],
}
