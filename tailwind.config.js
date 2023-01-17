module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C25458",
          secondary: "#FFF",
          accent: "#4B134F",
          neutral: "#130707",
          "base-100": "#f6f6f6",
          info: "#0CA6E9",
          success: "#2BD4BD",
          warning: "#F4C152",
          error: "#FB6F84",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
