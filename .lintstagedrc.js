'use strict';

module.exports = {
  '*.{json,js,ts}': ['npm run eslint -- --fix', 'prettier --write'],
  '*.{md,yml,yaml}': ['prettier --write'],
};
