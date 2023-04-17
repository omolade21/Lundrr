/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue": "#f6f4ff",
        "bluish":"#6838FE",
        "blackk":"#000000",
        "gray":"#9e9e9e",
        "gray2":"#C5C5C5",
        "yellow":"#FAF7E6",
        "gray-3":"#D9D9D9",
        "black-1":"#202020",
        "blue-2":"#6838FE",
        "cyan":"#02D4DF",
        "white":"#FBFBFF",
        "gray-800":"#3F3F3F",
        "royal":"#062560",
        "white-color":"#FFFFFF",
        "fff":"#fff",
        "darkBlue":"#062560",
        "darkGray":"#F5F5F5",
        "darkBlack" :"#424242",
        "gray200":"#B1B1B1",
        "gray300":"#757575",
        "gray400":"#C2C2C2",
        "blue300":"#6838FE",
        "lightBlue":"#D8D0FF",
        
     
        
      },
      dropShadow:{
        "filter":"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        nexa: ["Nexa-Bold"],
        nexaRegular: ['NexaRegular'],
      },

    },
  },
  plugins: [],
};
