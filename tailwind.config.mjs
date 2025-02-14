/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        quicksilver: ['quicksilver', 'sans-serif'],
        noto: ['Noto Sans Variable', 'sans-serif']
      },
      colors: {
        'main-color': 'var(--main-color)',
        'second-color': 'var(--second-color)',
        'third-color': 'var(--third-color)',
        'fourth-color': 'var(--fourth-color)',
        'fifth-color': 'var(--fifth-color)',
        'background-color': 'var(--background-color)'
      },
      maxWidth: {
        'max-width': 'var(--max-width)'
      },
      padding: {
        side: 'var(--padding-side)',
        'side-sm': 'var(--padding-side)'
      },
      borderRadius: {
        '10px': 'var(--border-radius)'
      },
      fontSize: {
        xxs: 'var(--step--2)',
        xs: 'var(--step--1)',
        0: 'var(--step-0)',
        1: 'var(--step-1)',
        2: 'var(--step-2)',
        3: 'var(--step-3)',
        4: 'var(--step-4)',
        5: 'var(--step-5)'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
