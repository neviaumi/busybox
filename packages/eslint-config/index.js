const { hasConfig } = require('@spotify/web-scripts-utils');

const hasReact = hasConfig([
  { type: 'dependency', dependency: 'react' },
  { type: 'dependency', dependency: 'react', dependencyType: 'peer' },
]);

const hasTypescript = hasConfig([
  { type: 'dependency', dependency: 'typescript' },
  { type: 'dependency', dependency: 'typescript', dependencyType: 'dev' },
  { type: 'file', pattern: 'tsconfig.json' },
]);

module.exports = {
  extends: [
    '@spotify',
    './preset/base.js',
    hasTypescript ? './preset/typescript.js' : '',
    hasReact ? './preset/react.js' : '',
  ].filter(s => !!s),
};
