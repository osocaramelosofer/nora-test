module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '410': '410px',
      },
      maxWidth: {
        '410': '410px',
      },
      gridTemplateColumns: {
        'main': '250px 1fr',
        'sugesstion-grid': '70% 1fr'
      },
      colors:{
        'nora-purple-50': '#CFD7FF',
        'nora-purple': '#AD1FEA',
        'nora-blue-100': '#62BCFA',
        'nora-blue-200': '#4661E6',
        'nora-blue-300': '#3A4374',
        'nora-gray-100': '#F7F8FD',
        'nora-gray-200': '#F2F2F2',
        'nora-gray-250': '#F2F4FE',
        'nora-gray-300': '#F2F4FF',
        'nora-gray-400': '#647196',
        'nora-orange-100': '#F49F85',

      },
      screens: {
        'laptop': '980px',
        'tablet': '730px',
      },
    },
  },
  plugins: [],
}
