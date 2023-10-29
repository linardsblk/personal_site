/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // primary
        background: '#011627',

        // secondary
        'secondary-blue': '#4D5BCE',

        // accent
        'accent-orange': '#FEA55F',

        // other
        lines: '#1E2D3D',
      },
    },
  },
  plugins: [],
};
