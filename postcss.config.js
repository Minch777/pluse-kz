module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    'cssnano': {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: false,
      }],
    },
    '@fullhuman/postcss-purgecss': {
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^[a-z]*-cols-/, /^[a-z]*:/, /^[a-z]*-/, /^hover:/, /^focus:/, /^active:/],
        deep: [/flex/, /grid/, /hidden/, /block/],
        greedy: [/safe$/, /^bg-/, /^text-/],
      }
    }
  }
} 