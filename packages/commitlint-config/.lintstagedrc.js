'use strict';

module.exports = {
  '*.{json,js,ts,tsx,md}': [
    'eslint --resolve-plugins-relative-to ../../node_modules/@busybox/eslint-config --fix',
    'prettier --write',
  ],
};
