# @busybox/babel-preset-typescript

Babel preset for TypeScript.

## Installation

```sh
npm install --save-dev @babel/core @babel/cli @busybox/babel-preset-typescript
```

Add `babel.config.json` [Working Example](../cypress/babel.config.json):

```json
{
  "presets": ["@busybox/babel-preset-typescript"]
}
```

Execute `babel` command by `npx babel src --out-dir dist --extensions ".ts"`
to compile your code.
