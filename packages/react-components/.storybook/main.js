/** @typedef {import('@storybook/builder-vite').StorybookViteConfig} StorybookViteConfig*/
const config = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: { builder: '@storybook/builder-vite' },
  features: {
    interactionsDebugger: true,
  },
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  viteFinal(viteConfig) {
    return viteConfig;
  },
};

module.exports = config;
