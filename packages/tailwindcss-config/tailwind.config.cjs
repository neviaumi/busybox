const tailwindCssFormsPlugin = require('@tailwindcss/forms');

const tailwindConfig = {
  plugins: [
    tailwindCssFormsPlugin({
      strategy: 'class',
    }),
  ],
  prefix: 'tw-',
};

module.exports = tailwindConfig;
