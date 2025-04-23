/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  safelist: [
    // Layout & Grid
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-5',
    'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-5',
    'lg:grid-cols-2', 'lg:grid-cols-3',
    'gap-2', 'gap-4', 'gap-6', 'gap-8', 'gap-12',
    'md:gap-2', 'md:gap-4', 'md:gap-8',
    
    // Flexbox
    'flex-col', 'flex-row',
    'md:flex-row', 'md:flex-col',
    'items-start', 'items-center',
    'justify-start', 'justify-center',
    'md:justify-start',
    
    // Spacing
    'space-y-2', 'space-y-4', 'space-x-2', 'space-x-4',
    'md:space-y-2', 'md:space-y-4',
    'p-2', 'p-3', 'p-4', 'p-6', 'p-8',
    'md:p-2', 'md:p-3', 'md:p-4', 'md:p-6', 'md:p-8',
    'py-16', 'py-24', 'py-32',
    'md:py-16', 'md:py-24', 'md:py-32',
    
    // Sizing
    'w-12', 'w-16', 'w-24', 'w-full', 'w-auto',
    'md:w-12', 'md:w-16', 'md:w-24', 'md:w-auto',
    'h-12', 'h-16', 'h-24',
    'md:h-12', 'md:h-16', 'md:h-24',
    
    // Typography
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl',
    'md:text-xs', 'md:text-sm', 'md:text-base', 'md:text-lg', 'md:text-xl',
    'text-center', 'text-left',
    'md:text-left', 'md:text-center',
    
    // Display
    'hidden', 'block', 'flex', 'grid',
    'md:hidden', 'md:block', 'md:flex', 'md:grid',
    
    // Transforms & Animations
    'scale-75', 'scale-90', 'scale-100', 'scale-[0.7]',
    'md:scale-75', 'md:scale-90', 'md:scale-100',
    'rotate-[-5deg]', 'rotate-[-12deg]',
    
    // Margins
    'mb-2', 'mb-3', 'mb-4', 'mb-6', 'mb-8', 'mb-12',
    'md:mb-0', 'md:mb-2', 'md:mb-3', 'md:mb-4', 'md:mb-6', 'md:mb-8',
    'mt-2', 'mt-4', 'mt-6', 'mt-8', 'mt-12', 'mt-16',
    'md:mt-2', 'md:mt-4', 'md:mt-8', 'md:mt-16',
    
    // Borders & Shadows
    'rounded-xl', 'rounded-2xl',
    'md:rounded-xl', 'md:rounded-2xl',
    'shadow-xl', 'shadow-2xl',
    'md:shadow-xl', 'md:shadow-2xl',
    
    // Orders
    'order-1', 'order-2',
    'md:order-1', 'md:order-2',
    'lg:order-1', 'lg:order-2',
    
    // Background & Colors
    'bg-white', 'bg-[#FDFCFB]', 'bg-[#F9FAFF]',
    'text-[#1A1A1A]', 'text-[#4A4A4A]', 'text-[#8F6ED5]',
    'md:bg-white', 'md:bg-[#FDFCFB]',
    
    // Container
    'container', 'max-w-7xl', 'max-w-2xl',
    'md:max-w-7xl', 'md:max-w-2xl'
  ],
  plugins: [],
} 