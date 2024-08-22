/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#07080a",
        primaryMedium: "#c0c1c4",
        primaryLight: "rgba(96,120,131,1)",
        accentLight: "#4b5563",
        'custom-blue-1': '#1e3d49',
        'custom-purple-1': '#382b61',
        secondry: '#fff',
        darkBlue: '#0a0c27', // Adjust based on your design
        "darkBlue-light": '#1a1c38',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        amiri: ["Amiri", "sans-serif"],
      },
      clipPath: {
        'custom-polygon': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      },
    },
  },
  plugins: [],
};
