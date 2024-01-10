import {typescriptFileSuffixes} from "../utils/file-patterns.mjs";

export default [{
      files: [typescriptFileSuffixes],
      rules: {
        'dot-notation': 'off',
        'max-params': 'off',
        'no-useless-constructor': 'off',
      },
}];
