'use strict';

module.exports = {
  '*.{js,ts}': ['prettier --write', 'eslint --fix'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
  'package.json': ['prettier --write', 'npmPkgJsonLint'],
};
