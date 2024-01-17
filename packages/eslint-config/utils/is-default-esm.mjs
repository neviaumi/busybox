import { hasConfig } from './has-config.mjs';

export const isDefaultEsm = () =>
  hasConfig([{ property: ['type'], type: 'package.json', value: 'module' }]);
