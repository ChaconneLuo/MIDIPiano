module.exports = {
  content: ['./index.html', './src/**/*.{html,vue,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '7.5vw': '7.5vw'
      },
      height: {
        '50vh': '50vh'
      }
    },
    colors: {
      mainBgLight: '#f1fafa',
      mainBgDark: '#101010',
      fileBgLight: '#ffffff',
      fileBgDark: '#060606',
      logoFontLight: '#060606',
      logoFontDark: '#ffffff',
      buttonBgLight: '#0B99D8',
      buttonBgDark: '#F9A123'
    },
    fontFamily: {
      gill: ['Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', 'sans - serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
