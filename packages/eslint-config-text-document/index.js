import jsonConfig from './json.js';
import mdConfig from './markdown.js';
import ymlConfig from './yml.js';

export function useJSONEslintConfig(override = {}) {
  return Object.assign(jsonConfig, {
    ...override,
    rules: {
      ...jsonConfig.rules,
      ...override.rules,
    },
  });
}

export function useMarkdownEslintConfig(override = {}) {
  return Object.assign(mdConfig, {
    ...override,
    rules: {
      ...mdConfig.rules,
      ...override.rules,
    },
  });
}

export function useYamlEslintConfig(override = {}) {
  return Object.assign(ymlConfig, {
    ...override,
    rules: {
      ...ymlConfig.rules,
      ...override.rules,
    },
  });
}
