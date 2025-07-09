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
        'costco-red': '#E31837',
        'costco-blue': '#005DAA',
        'costco': {
          'red': '#E31837',
          'blue': '#005DAA',
          'light-gray': '#F5F5F5',
          'dark-gray': '#333333',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'costco-gradient': 'linear-gradient(135deg, #E31837 0%, #005DAA 100%)',
      },
      boxShadow: {
        'costco': '0 4px 6px -1px rgba(0, 93, 170, 0.1), 0 2px 4px -1px rgba(0, 93, 170, 0.06)',
        'costco-lg': '0 10px 15px -3px rgba(0, 93, 170, 0.1), 0 4px 6px -2px rgba(0, 93, 170, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config