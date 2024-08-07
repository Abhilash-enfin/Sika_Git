/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '991px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      fontFamily: {
        custom: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, hsla(0, 0%, 5.5%, 1) 50%, hsla(0, 0%, 100%, 1) 50%)',
      },
    },
    container: {
      center: true, 
      padding: '10px',
      screens: {
        sm: '100%',
        md: '768px',
        lg: '992px',
        xl: '1074px',
      },
    },
    
    colors: {
      'secondary-gray': '#F2F2F2',
      'white': '#FFFFFF',
      'black': '#000000',
      'primary-black' : '#0E0E0E',
      'secondary-black': "#22282B",
      'gray-dark': "#252525",
      'gray-light': "#949494",
      'green': '#84EF84',
      'primary': '#1da1f2',
      'secondary': '#14171a',
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

