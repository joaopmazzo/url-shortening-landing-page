/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(180, 66%, 49%)",
        "primary-cyan-hover": "hsl(180, 56%, 75%)",
        "primary-dark-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
        "neutral-gray": "hsl(0, 0%, 75%)",
        "neutral-grayish-violet": "hsl(257, 8%, 63%)",
        "neutral-very-dark-blue": "hsl(257, 11%, 22%)",
        "neutral-very-dark-violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        "bg-shorten-desktop": "url('./src/assets/bg-shorten-desktop.svg')",
        // "mobile-section-pattern":
        //   "url('/bg-pattern-circles.svg'), linear-gradient(135deg, #2D2E40 0%, #3F4164 100%)",
      },
      // backgroundSize: {
      //   "desktop-pattern-size-desktop": "2500px, 100%",
      //   "desktop-pattern-size-mobile": "1600px, 100%",
      //   "mobile-section-pattern-size-desktop": "1014px, 100%",
      //   "mobile-section-pattern-size-mobile": "602px, 100%",
      // },
      // boxShadow: {
      //   dropdown: "0px 20px 40px rgba(0, 0, 0, 0.243444)",
      // },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      // screens: {
      //   "max-sm": { max: "640px" },
      // },
    },
  },
  plugins: [],
};
