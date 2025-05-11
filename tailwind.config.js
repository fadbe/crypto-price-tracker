/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0052FE', // Main primary color
          600: '#0047E5',
          700: '#003BCC',
          800: '#0030B3',
          900: '#002499'
        },
        success: {
          500: '#00C07B', // Green for positive values
        },
        danger: {
          500: '#F82D45', // Red for negative values
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0e1623',
          900: '#0a101f'
        }
      },
      animation: {
        'pulse-once': 'pulse 2s ease-in-out 1',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};