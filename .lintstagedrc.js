'use strict';

module.exports = {
  '*.{json,js,ts}': ['eslint --fix', 'prettier --write'],
  '*.{md,yml,yaml}': ['prettier --write'],
  'package.json': ['eslint --fix', 'prettier --write', 'npmPkgJsonLint'],
};
