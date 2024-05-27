/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: "#515151",
        black: "#000",
        steelblue: "#0080c9",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
      },
      animation: {
        breathe1: 'breathe1 2s infinite',
        breathe2: 'breathe2 2.5s infinite',
        breathe3: 'breathe3 3s infinite',
        breathe4: 'breathe4 3.5s infinite',
      },
      keyframes: {
        breathe1: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        breathe2: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
        breathe3: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
        },
        breathe4: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
      },
    },
    fontSize: {
      mini: "0.938rem",
      "7xl": "1.625rem",
      "26xl": "2.813rem",
      "36xl": "3.438rem",
      "4xs": "0.563rem",
      inherit: "inherit",
    },
    screens: {
      mq333: {
        raw: "screen and (max-width: 333px)",
      },
      mq330: {
        raw: "screen and (max-width: 330px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
