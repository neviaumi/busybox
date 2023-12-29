import jsCommonConfig from './preset/javascript.mjs';
import cypressConfig from './preset/cypress.mjs';
import jestConfig from "./preset/jest.mjs"
import jsonConfig from './preset/json.mjs';
import { hasConfig } from './utils/has-config.mjs';
import eslintGlobals from "globals";
import markdownConfig from "./preset/markdown.mjs"
import nestConfig from "./preset/nest.mjs"
import reactConfig from "./preset/react-jsx.mjs"
import storybookConfig from "./preset/storybook.mjs"
import typescriptConfig from "./preset/typescript.mjs"
import tailwindCSSConfig from "./preset/tailwindcss.mjs"
import ymlConfig from "./preset/yml.mjs"
import {isDefaultEsm} from "./utils/is-default-esm.mjs"

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

const isDefaultESModule = await isDefaultEsm()

const eslintConfig = [
  jsCommonConfig,
  jsonConfig,
  markdownConfig,
  ymlConfig,
  hasTypescript ? typescriptConfig : [],
  hasReact ? reactConfig : [],
  hasJest ? jestConfig: [],
  hasCypress ? cypressConfig : [],
  hasNest ? nestConfig: [],
  hasStorybook ? storybookConfig: [],
  hasTailwindcss ? tailwindCSSConfig: [],
].flat();

export default eslintConfig

export function withConfigPrint() {
  console.debug(`
hasTypescript: ${hasTypescript}
hasReact: ${hasReact}
hasJest: ${hasJest}
hasCypress: ${hasCypress}
hasNest: ${hasNest}
hasStorybook: ${hasStorybook}
hasTailwindcss: ${hasTailwindcss}
isDefaultEsm: ${isDefaultESModule}
`)
  return eslintConfig
}

export const globals = eslintGlobals