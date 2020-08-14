'use strict';

module.exports = {
  extends: '@busybox/npm-package-json-lint-config',
  overrides: [
    {
      patterns: ['packages/**/package.json'],
      rules: {
        'require-publishConfig': 'error',
        'valid-values-publishConfig': ['error', [{ access: 'public' }]],
        'valid-values-name-scope': ['error', ['@busybox']],
      },
    },
  ],
};
