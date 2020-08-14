'use strict';

module.exports = {
  extends: '@busybox/npm-package-json-lint-config',
  overrides: [
    {
      patterns: ['packages/**/package.json'],
      rules: {
        'prefer-absolute-version-dependencies': [
          'error',
          {
            exceptions: ['@busybox/eslint-plugin-json'],
          },
        ],
        'require-files': 'error',
        'require-publishConfig': 'error',
        'require-repository': 'error',
        'require-repository-directory': 'error',
        'valid-values-name-scope': ['error', ['@busybox']],
        'valid-values-publishConfig': ['error', [{ access: 'public' }]],
      },
    },
  ],
};
