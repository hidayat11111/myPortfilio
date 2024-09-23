/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {


      animation: {
        'bounce-slow': 'bounce 2s infinite', // Slows down bounce to 2 seconds
      },
      colors: {
        'custom-black': 'rgba(0, 0, 0, 0.93)',
        'custom-gray': 'rgb(63, 61, 61)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, rgba(0, 0, 0, 0.93), rgb(63, 61, 61))',
        'custom-gradient1': 'linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)',
      },
       
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInUpDelay: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out',
        'fadeInUp-1': 'fadeInUp 0.5s ease-out',
        'fadeInUp-2': 'fadeInUp 0.5s ease-out 0.1s',
        'fadeInUp-3': 'fadeInUp 0.5s ease-out 0.2s',
        'fadeInUp-4': 'fadeInUp 0.5s ease-out 0.3s',
        'fadeInUp-5': 'fadeInUp 0.5s ease-out 0.4s',
      },

    },
  },
  plugins: [],
}

