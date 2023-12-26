export default {
  '*.{json,js,yml,yaml,md}': [
    'eslint --fix --ignore-pattern package-lock.json',
    'prettier --write',
  ],
};
