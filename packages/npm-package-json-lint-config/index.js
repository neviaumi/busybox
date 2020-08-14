'use strict';

module.exports = {
  extends: 'npm-package-json-lint-config-default',
  rules: {
    'require-license': 'error',
    'valid-values-license': ['error', ['MIT']],
    'require-version': 'error',
    'require-engines': 'error',
    'prefer-property-order': ['error', []],
    'prefer-alphabetical-scripts': 'error',
    'prefer-alphabetical-devDependencies': 'error',
    'prefer-alphabetical-dependencies': 'error',
    'prefer-absolute-version-devDependencies': 'error',
    'prefer-absolute-version-dependencies': 'error',
  },
};
