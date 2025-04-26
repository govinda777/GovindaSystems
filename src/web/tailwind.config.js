/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2ECAD5',
        secondary: '#FF6B6B',
        accent: '#F25F94',
        dark: '#1E3D59',
        darker: '#15293E',
        'dark-bg': '#111827',
        'dark-bg-lighter': '#1F2937',
        'gray': '#9CA3AF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #111827 0%, #1E3D59 100%)',
        'text-gradient': 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
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
        'card': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'card': '20px',
        'button': '8px',
      },
    },
  },
  plugins: [],
}
