/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 0.7s infinite both',
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '0.2',
          },
          '20%': {
            opacity: '1',
          },
          '100%': {
            opacity: ' 0.2',
          },
        },
      },
      colors: {
        // primary
        background: '#011627',

        // secondary
        'secondary-blue': '#6B77D6',

        // accent
        'accent-orange': '#FEA55F',

        // other
        lines: '#1E2D3D',
      },
    },
  },
  plugins: [],
};
