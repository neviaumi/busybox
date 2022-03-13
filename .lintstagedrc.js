'use strict';

module.exports = {
  '*.md': ['prettier --write'],
  '*.{json,js,ts,yml,yaml}': ['npm run eslint -- --fix', 'prettier --write'],
};
