const { rules } = require('@commitlint/config-lerna-scopes');

module.exports = {
  extends: ['@commitlint/config-lerna-scopes'],
  rules: {
    'scope-enum': async ctx => {
      const [level, applicable, values] = await rules['scope-enum'](ctx);
      return [level, applicable, [...values, 'deps']];
    },
  },
};
