/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        details: '#666666',
        layout: '#F5F5F5',
        bgButton: '#F2F2F2',
        background: '#FEFEFE',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#FF7A00',
          secondary: '#1E2029',

          '--rounded-box': '15px',
          '--rounded-btn': '10px',
          '--btn-focus-scale': '0.90',
        },
      },
    ],
  },
};
