import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#F5F5F5',
        'sub-color' : '#282723',
        'accent-color':'#54514C',
        'sub-accent-color': '#374699'
      }
    },
    screens: {
      'xs': '254px',
      ...defaultTheme.screens
    }
  },
  plugins: [],
}
export default config

// 'main-color': '#F5F5F5',
// 'sub-color' : '#232C61',
// 'accent-color':'#374699',
// 'sub-accent-color': '#30D5C7'