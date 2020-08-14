'use strict';

module.exports = {
  extends: 'npm-package-json-lint-config-default',
  rules: {
    'prefer-absolute-version-dependencies': 'error',
    'prefer-absolute-version-devDependencies': 'error',
    'prefer-alphabetical-dependencies': 'error',
    'prefer-alphabetical-devDependencies': 'error',
    'prefer-alphabetical-scripts': 'error',
    'require-engines': 'error',
    'require-license': 'error',
    'require-version': 'error',
    'valid-values-license': ['error', ['MIT']],
  },
};
