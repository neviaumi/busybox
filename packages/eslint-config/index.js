const { hasConfig } = require('@spotify/web-scripts-utils');

const hasReact = hasConfig([
  { type: 'dependency', dependency: 'react' },
  { type: 'dependency', dependency: 'react', dependencyType: 'peer' },
]);

module.exports = {
  extends: [
    '@spotify',
    './preset/typescript.js',
    hasReact ? './preset/react.js' : '',
  ].filter(s => !!s),
  parserOptions: {
    ecmaVersion: 2020,
  },
};
