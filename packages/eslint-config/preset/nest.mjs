import { typescriptFileSuffixes } from '../utils/file-patterns.mjs';

export default [
  {
    files: typescriptFileSuffixes.map(ext => `**/*.${ext}`),
    rules: {
      'dot-notation': 'off',
      'max-params': 'off',
      'no-useless-constructor': 'off',
    },
  },
];
