module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
 ],
  theme: {
    colors: {
      primary: "#D789D7",
      secondary: "#5D54A4",
      white: "#FFFFFF",
      black: "#000000",
      "gray-12": "rgba(0,0,0,0.12)",
      "gray-70": "rgba(0,0,0,0.7)",
      "gray-80": "rgba(0,0,0,0.9)",
      "gray-87": "rgba(0,0,0,0.87)",
      "gray-245": "#F5F5F5",
    },
    extend: {
      fontFamily: {
       muli:'Mulish'
      },
      fontSize: {
        "7xl": "5rem",
      },
      spacing: {
        "68": "17rem",
        "72": "18rem",
        "84": "21rem",
      },
      maxWidth: {
        "9/2xl": "68rem",
        "7xl": "80rem",
        container: "1280px",
      },
    },
  },
  variants: {},
  plugins: [],
};