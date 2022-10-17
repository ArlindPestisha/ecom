/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   xl: "1444px",
    //   xxl: "2400px",
    // },
    extend: {
      colors: {
        orangePrimary: "#D87D4A",
        orangeHover: "#fbaf85",
        pureBlack: "#000000",
        hoverBlack: "#101010",
        grayPrimary: "#F1F1F1",
        grayLight: "#FAFAFA",
      },
     
    },
  },
  plugins: [],
};
