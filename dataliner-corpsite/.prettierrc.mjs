/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
