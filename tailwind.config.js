import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": '#750404',
          "secondary": '#f5f2f3',
          "accent": '#ef84f5',
          "neutral": '#000000',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },
}

