/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
      colors: {
          color: {
              f: '#fff',
              3: '#333',
              6: '#666',
              9: '#999',
          },
      },
      fontSize: {
          '12px': '12px',
          '14px': '14px',
          '16px': '16px',
          '18px': '18px',
          '20px': '20px',
      },

      extend: {
          spacing: {
              '10px': '10px',
              '20px': '20px',
              '30px': '30px',
              '40px': '40px',
          },
      },
  },
  plugins: [],
};
