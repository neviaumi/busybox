'use strict';

const {
  presetBuilder,
} = require('@busybox/npm-package-json-lint-config/mono-repo');

module.exports = presetBuilder('packages', '@busybox');
