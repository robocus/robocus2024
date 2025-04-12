/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        'ct-blue':'#0339A6',
        'ct-orange':'#F2380F'
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Opensans: ["Open-Sans", "sans-serif"],
        Montserrat:['Montserrat',"sans-serif"],
        
      },

      keyframes: {
        slideDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        slideDown: "slideDown .4s ease-in-out",
      },
      backgroudImage:{
        'slider-bg':'url("./images/slider-image/slide-01.jpg")'
      }
    },
  },
  plugins: [],
};
