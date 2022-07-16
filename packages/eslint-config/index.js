const { hasConfig } = require('@spotify/web-scripts-utils');

const hasReact = hasConfig([
  { dependency: 'react', type: 'dependency' },
  { dependency: 'react', dependencyType: 'peer', type: 'dependency' },
]);

const hasAngular = hasConfig([
  { dependency: '@angular/core', type: 'dependency' },
  { dependency: '@angular/core', dependencyType: 'peer', type: 'dependency' },
]);

const hasNest = hasConfig([
  { dependency: '@nestjs/core', type: 'dependency' },
  { dependency: '@nestjs/core', dependencyType: 'peer', type: 'dependency' },
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
    './preset/prettier.js',
    './preset/javascript.js',
    './preset/json.js',
    './preset/yml.js',
    hasAngular ? './preset/angular.js' : '',
    hasNest ? './preset/nest.js' : '',
    hasJest ? './preset/jest.js' : '',
    hasReact ? './preset/react-jsx.js' : '',
    hasTypescript ? './preset/typescript.js' : '',
  ].filter(s => !!s),
};
