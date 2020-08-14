'use strict';

module.exports = {
  '*.{json,js,ts}': ['prettier --write', 'eslint --fix'],
  '*.{md,yml,yaml}': ['prettier --write'],
  'package.json': ['prettier --write', 'npmPkgJsonLint'],
};
