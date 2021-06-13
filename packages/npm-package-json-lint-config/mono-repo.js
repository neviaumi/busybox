'use strict';

const base = require('./index');

const monoRepoSharedConfig = (packages, scope) => ({
  ...base,
  overrides: [
    {
      patterns: [`${packages}/**/package.json`],
      rules: {
        'require-files': 'error',
        'require-publishConfig': 'error',
        'require-repository': 'error',
        'require-repository-directory': 'error',
        'valid-values-name-scope': [
          scope !== undefined ? 'error' : 'off',
          [scope],
        ],
      },
    },
  ],
});

module.exports = monoRepoSharedConfig('packages');
module.exports.presetBuilder = monoRepoSharedConfig;
