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
        'main-color': '#050505',
        'second-color': '#f1961c',
        'third-color': '#f8fbfa',
        'fourth-color': '#777777',
        'fifth-color': '#0a0a0a',
        'background-color': '#050505'
      },
      maxWidth: {
        'max-width': 'calc(1250px + 4rem)'
      },
      padding: {
        side: '2rem'
      },
      borderRadius: {
        '10px': '10px'
      },
      fontSize: {
        xxs: 'clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem)',
        xs: 'clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem)',
        0: 'clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)',
        1: 'clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem)',
        2: 'clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem)',
        3: 'clamp(1.944rem, 1.771rem + 0.8651vw, 2.4414rem)',
        4: 'clamp(2.3328rem, 2.0827rem + 1.2504vw, 3.0518rem)',
        5: 'clamp(2.7994rem, 2.4462rem + 1.7658vw, 3.8147rem)'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
