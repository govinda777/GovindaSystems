/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#30E3F0',
        secondary: '#FF7A7A',
        accent: '#FF6BA4',
        dark: '#1E3D59',
        darker: '#15293E',
        'dark-bg': '#0B1018',
        'dark-bg-lighter': '#1F2937',
        'gray': '#C5CDD7',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B1018 0%, #1E3D59 100%)',
        'text-gradient': 'linear-gradient(90deg, #30E3F0, #FF7A7A)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '2.5rem',
        'heading-2': '2rem',
        'heading-3': '1.75rem',
        'body': '1rem',
        'body-lg': '1.125rem',
      },
      boxShadow: {
        'card': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'card': '20px',
        'button': '8px',
      },
    },
  },
  plugins: [],
}
