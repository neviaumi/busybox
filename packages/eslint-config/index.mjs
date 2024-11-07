import eslintGlobals from 'globals';

import cypressConfig from './preset/cypress.mjs';
import jsCommonConfig from './preset/javascript.mjs';
import jestConfig from './preset/jest.mjs';
import jsonConfig from './preset/json.mjs';
import markdownConfig from './preset/markdown.mjs';
import nestConfig from './preset/nest.mjs';
import ymlConfig from './preset/yml.mjs';
import { hasConfig } from './utils/has-config.mjs';
import { isDefaultEsm } from './utils/is-default-esm.mjs';

const hasNest = await hasConfig([
  { dependency: '@nestjs/core', type: 'dependency' },
  { dependency: '@nestjs/core', dependencyType: 'peer', type: 'dependency' },
]);

const hasJest = await hasConfig([
  { dependency: 'jest', dependencyType: 'dev', type: 'dependency' },
]);

const hasStorybook = await hasConfig([
  { dependency: 'storybook', dependencyType: 'dev', type: 'dependency' },
]);

const hasCypress = await hasConfig([
  { dependency: 'cypress', dependencyType: 'dev', type: 'dependency' },
]);

const isDefaultESModule = await isDefaultEsm();

function createEsLintConfig({ hasCypress, hasJest, hasNest }) {
  const eslintConfig = [
    jsCommonConfig,
    jsonConfig,
    markdownConfig,
    ymlConfig,
    hasJest ? jestConfig : [],
    hasCypress ? cypressConfig : [],
    hasNest ? nestConfig : [],
  ].flat();
  return eslintConfig;
}

export default createEsLintConfig({
  hasCypress,
  hasJest,
  hasNest,
  hasStorybook,
});

export function withOverridePackageAutoDetect(overrides = {}) {
  const {
    hasCypress: hasCypressOverride = hasCypress,
    hasJest: hasJestOverride = hasJest,
    hasNest: hasNestOverride = hasNest,
    isDefaultESModule: isDefaultESModuleOverride = isDefaultESModule,
  } = overrides;
  return () => {
    return createEsLintConfig({
      hasCypress: hasCypressOverride,
      hasJest: hasJestOverride,
      hasNest: hasNestOverride,
      isDefaultESModule: isDefaultESModuleOverride,
    });
  };
}

export const globals = eslintGlobals;
