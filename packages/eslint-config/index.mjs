import eslintGlobals from 'globals';

import cypressConfig from './preset/cypress.mjs';
import jsCommonConfig from './preset/javascript.mjs';
import jestConfig from './preset/jest.mjs';
import jsonConfig from './preset/json.mjs';
import markdownConfig from './preset/markdown.mjs';
import nestConfig from './preset/nest.mjs';
import reactConfig from './preset/react-jsx.mjs';
import storybookConfig from './preset/storybook.mjs';
import tailwindCSSConfig from './preset/tailwindcss.mjs';
import typescriptConfig from './preset/typescript.mjs';
import ymlConfig from './preset/yml.mjs';
import { hasConfig } from './utils/has-config.mjs';
import { isDefaultEsm } from './utils/is-default-esm.mjs';

const hasReact = await hasConfig([
  { dependency: 'react', type: 'dependency' },
  { dependency: 'react', dependencyType: 'peer', type: 'dependency' },
]);

const hasNest = await hasConfig([
  { dependency: '@nestjs/core', type: 'dependency' },
  { dependency: '@nestjs/core', dependencyType: 'peer', type: 'dependency' },
]);

const hasTypescript = await hasConfig([
  { dependency: 'typescript', type: 'dependency' },
  { dependency: 'typescript', dependencyType: 'dev', type: 'dependency' },
  { pattern: 'tsconfig.json', type: 'file' },
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

const hasTailwindcss = await hasConfig([
  { dependency: 'tailwindcss', type: 'dependency' },
  { dependency: 'tailwindcss', dependencyType: 'peer', type: 'dependency' },
  { dependency: 'tailwindcss', dependencyType: 'dev', type: 'dependency' },
]);

const isDefaultESModule = await isDefaultEsm();

function createEsLintConfig({
  hasCypress,
  hasJest,
  hasNest,
  hasReact,
  hasStorybook,
  hasTailwindcss,
  hasTypescript,
}) {
  const eslintConfig = [
    jsCommonConfig,
    jsonConfig,
    markdownConfig,
    ymlConfig,
    hasTypescript ? typescriptConfig : [],
    hasReact ? reactConfig : [],
    hasJest ? jestConfig : [],
    hasCypress ? cypressConfig : [],
    hasNest ? nestConfig : [],
    hasStorybook ? storybookConfig : [],
    hasTailwindcss ? tailwindCSSConfig : [],
  ].flat();
  return eslintConfig;
}

export default createEsLintConfig({
  hasCypress,
  hasJest,
  hasNest,
  hasReact,
  hasStorybook,
  hasTailwindcss,
  hasTypescript,
});

export function withOverridePackageAutoDetect(overrides = {}) {
  const {
    hasCypress: hasCypressOverride = hasCypress,
    hasJest: hasJestOverride = hasJest,
    hasNest: hasNestOverride = hasNest,
    hasReact: hasReactOverride = hasReact,
    hasStorybook: hasStorybookOverride = hasStorybook,
    hasTailwindcss: hasTailwindcssOverride = hasTailwindcss,
    hasTypescript: hasTypescriptOverride = hasTypescript,
    isDefaultESModule: isDefaultESModuleOverride = isDefaultESModule,
  } = overrides;
  return () => {
    return createEsLintConfig({
      hasCypress: hasCypressOverride,
      hasJest: hasJestOverride,
      hasNest: hasNestOverride,
      hasReact: hasReactOverride,
      hasStorybook: hasStorybookOverride,
      hasTailwindcss: hasTailwindcssOverride,
      hasTypescript: hasTypescriptOverride,
      isDefaultESModule: isDefaultESModuleOverride,
    });
  };
}

export const globals = eslintGlobals;
