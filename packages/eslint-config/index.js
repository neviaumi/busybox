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

module.exports = {
  extends: [
    '@spotify/eslint-config-base',
    './preset/base.js',
    hasTypescript ? './preset/typescript.js' : '',
    hasReact ? './preset/react.js' : '',
  ].filter(s => !!s),
};
