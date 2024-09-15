/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1024px', 
      },
      scrollbar: {
        'hidden': 'overflow-x: auto; -ms-overflow-style: none; scrollbar-width: none;',
        'scroll': 'overflow-x: auto;',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hidden': {
            overflowX: 'auto',
            overflowY: 'hidden',
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          },
          '.scrollbar-hidden::-webkit-scrollbar': {
            display: 'none',
          },
          '.scrollbar-scroll': {
            overflowX: 'auto',
            overflowY: 'auto',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}
