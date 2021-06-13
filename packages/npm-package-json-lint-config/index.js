'use strict';

module.exports = {
  extends: 'npm-package-json-lint-config-default',
  rules: {
    'prefer-absolute-version-dependencies': 'error',
    'prefer-absolute-version-devDependencies': 'error',
    'require-engines': 'error',
    'require-license': 'error',
    'require-repository': 'error',
    'require-version': 'error',
    'valid-values-license': ['error', ['MIT', 'UNLICENSED']],
  },
};
