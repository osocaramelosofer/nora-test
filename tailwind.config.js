module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main': '1fr 3fr'
      },
      colors:{
        'nora-purple': '#AD1FEA',
        'nora-blue-100': '#62BCFA',
        'nora-blue-200': '#4661E6',
        'nora-blue-300': '#3A4374',
        'nora-gray-100': '#F7F8FD',
        'nora-gray-200': '#F2F2F2',
        'nora-gray-300': '#F2F4FF',
        'nora-gray-400': '#647196',
        'nora-orange-100': '#F49F85',


      }
    },
  },
  plugins: [],
}
