const { hasConfig } = require('@spotify/web-scripts-utils');

const hasReact = hasConfig([
  { dependency: 'react', type: 'dependency' },
  { dependency: 'react', dependencyType: 'peer', type: 'dependency' },
]);

const hasTypescript = hasConfig([
  { dependency: 'typescript', type: 'dependency' },
  { dependency: 'typescript', dependencyType: 'dev', type: 'dependency' },
  { pattern: 'tsconfig.json', type: 'file' },
]);

const hasJest = hasConfig([
  { dependency: 'jest', dependencyType: 'dev', type: 'dependency' },
]);

module.exports = {
  extends: [
    '@spotify/eslint-config-base',
    './preset/prettier',
    './preset/javascript.js',
    './preset/json.js',
    './preset/yml.js',
    hasJest ? './preset/jest.js' : '',
    hasReact ? './preset/react-jsx.js' : '',
    hasTypescript ? './preset/typescript.js' : '',
  ].filter(s => !!s),
};
