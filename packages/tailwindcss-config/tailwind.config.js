import tailwindCssFormsPlugin from '@tailwindcss/forms';

const tailwindConfig = {
  plugins: [
    tailwindCssFormsPlugin({
      strategy: 'class',
    }),
  ],
  prefix: 'tw-',
};

export default tailwindConfig;
