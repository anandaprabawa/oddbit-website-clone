module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#abd138',
        secondary: '#2e7d32',
      },
      margin: {
        '-80': '-80px',
        80: '80px',
        '-85': '-85px',
        85: '85px',
      },
      padding: {
        '-80': '-80px',
        80: '80px',
        '-85': '-85px',
        85: '85px',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      margin: ['responsive', 'last', 'first'],
    },
  },
  plugins: [],
}
