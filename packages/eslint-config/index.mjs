import eslintGlobals from 'globals';

import jsCommonConfig from './preset/javascript.mjs';
import jestConfig from './preset/jest.mjs';
import { hasConfig } from './utils/has-config.mjs';
import { isDefaultEsm } from './utils/is-default-esm.mjs';

const hasJest = await hasConfig([
  { dependency: 'jest', dependencyType: 'dev', type: 'dependency' },
]);

const isDefaultESModule = await isDefaultEsm();

function createEsLintConfig({ hasJest }) {
  const eslintConfig = [jsCommonConfig, hasJest ? jestConfig : []].flat();
  return eslintConfig;
}

export default createEsLintConfig({
  hasJest,
});

export function withOverridePackageAutoDetect(overrides = {}) {
  const {
    hasJest: hasJestOverride = hasJest,
    isDefaultESModule: isDefaultESModuleOverride = isDefaultESModule,
  } = overrides;
  return () => {
    return createEsLintConfig({
      hasJest: hasJestOverride,
      isDefaultESModule: isDefaultESModuleOverride,
    });
  };
}

export const globals = eslintGlobals;
