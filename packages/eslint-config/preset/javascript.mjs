import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import eslintPluginSortKeysFix from 'eslint-plugin-sort-keys-fix';
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import js from "@eslint/js";
import {hasConfig} from "../utils/has-config.mjs";
import {jsFileSuffixes, typescriptFileSuffixes} from "../utils/file-patterns.mjs"
import globals from "globals";

const isDefaultESModule = await hasConfig([{type: 'package.json', property: 'type', value: 'module'}])
const esmSuffixes = ['*.jsx',
  '*.mjs',
  '*.ts',
  '*.tsx',
  '*.mts',
  '*.mtsx',];
export default [
  {
    files: ['*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: isDefaultESModule ? 'commonjs': 'module',
    }
  },
  {
    files: esmSuffixes,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: [
      '*.cjs',
      '*.cts',
      '*.ctsx',
      '*.cjsx'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
    },
  },
  {
    files: [
        ...jsFileSuffixes,
        ...typescriptFileSuffixes,
    ],
    plugins: {
      import: eslintPluginImport,
      n: eslintPluginN,
      prettier: eslintPluginPrettier,
      'simple-import-sort': eslintPluginSimpleImportSort,
      'sort-destructure-keys': eslintPluginSortDestructureKeys,
      'sort-keys-fix': eslintPluginSortKeysFix,
    },
    rules: {
      ...js.configs.recommended.rules, // Recommended config applied to all files
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginN.configs['recommended-module'].rules,
      'block-scoped-var': 'error',
      'import/first': 'error',

      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      'import/no-named-as-default': 'off',

      // auto sort import statements
      'import/order': 'off',

      'lines-between-class-members': 'error',
      'max-lines': [
        'error',
        {
          max: 500,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      'max-params': ['error', 4],

      // Prefer smaller function and composite together
      'max-statements': [
        'error',
        {
          max: 40,
        },
      ],

      // 'n/no-missing-import': ['off'],

      'new-cap': 'off',

      'no-console': 'error',

      // No unnecessary else branch
      'no-else-return': 'error',

      'prefer-const': 'error',

      // Promise reject always is instance of error
      'prefer-promise-reject-errors': 'error',

      'prettier/prettier': 'error',
      radix: 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-destructure-keys/sort-destructure-keys': 'error',
      'sort-imports': 'off',
      'sort-keys-fix/sort-keys-fix': 'error',
    },
  },
  {
    files: isDefaultESModule ? ['*.js',...esmSuffixes] : esmSuffixes,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2024,
      },
    },
    plugins: {
      import: eslintPluginImport,
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'import/extensions': ['error', 'ignorePackages'],
      'n/no-missing-import': ['off'],
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/prefer-node-protocol': 'error',
    },
  },
];
