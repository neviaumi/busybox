'use strict';

module.exports = {
  '*.md': ['prettier --write'],
  '*.{json,js,ts}': ['eslint --fix', 'prettier --write'],
};
