/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        seashell: "#F1F1F1",
        sunglow: "#FFC72C",
        white: "#FFFFFF",
      },
      textColor: {
        white: "#FFFFFF",
        cinder: "#171215",
        lavared: "#DA291C",
        silver_chalice: "#AAAAAA",
        mistblue: "#6A6D7C",
      },
      borderColor: {
        Lavender_Pinocchio: "#E1E1E1",
        lavared: "#DA291C",
        platinum: "#E2E2E2",
        iron: "#D0D5DD",
      },
    },
  },
  plugins: [],
};
