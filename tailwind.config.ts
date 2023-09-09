import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#F5F5F5',
        'sub-color':'#FFFFFF',
        'accent-color' : '#232C61'
      }
    },
  },
  plugins: [],
}
export default config
