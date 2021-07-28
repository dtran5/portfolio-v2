module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1800px",
    },
    extend: {
      fontFamily: {
        body: ["Rubik"],
      },
      inset: {
        17.5: "70px",
        38: "9.5rem",
        26: "104px",
      },
      spacing: {
        88: "22rem",
        120: "30rem",
        140: "35rem",
        320: "80rem",
      },
      height: {
        4.5: "18px",
      },
      width: {
        4.5: "18px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
