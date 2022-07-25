'use strict';

module.exports = {
  '*.md': ['prettier --write'],
  '*.{json,js,yml,yaml}': ['npm run eslint -- --fix', 'prettier --write'],
};
