import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';

const config = {
  plugins: {
    tailwindcss: eslintPluginTailwindCSS,
  },
  rules: {
    ...eslintPluginTailwindCSS.configs.recommended.rules,
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-custom-classname': 'error',
  },
};
export function useTailwindCSSEslintConfig(override) {
  if (!override?.files || !override?.files.length) {
    throw new Error('You must provide a list of files to lint');
  }
  return Object.assign(config, {
    ...override,
    rules: {
      ...config.rules,
      ...override.rules,
    },
  });
}
