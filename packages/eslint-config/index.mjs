import eslintGlobals from 'globals';

import jsCommonConfig from './preset/javascript.mjs';

function createEsLintConfig() {
  const eslintConfig = [jsCommonConfig].flat();
  return eslintConfig;
}

export default createEsLintConfig({});

export const globals = eslintGlobals;
