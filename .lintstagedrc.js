'use strict';

module.exports = {
  '*.md': ['prettier --write'],
  '*.{json,js,yml,yaml}': ['eslint --fix', 'prettier --write'],
};
