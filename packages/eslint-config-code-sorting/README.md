# @busybox/eslint-config

## Installation

- Install dependencies

```bash
npm install --save-dev @busybox/eslint-config-esm
```

- Setup [prettier](../prettier-config)

- In your project root `eslint.js`

```js
'use strict';
import { useESModuleEslintConfig } from '@busybox/eslint-config-esm';
export default [useESModuleEslintConfig()];
```

[Example](../../.eslintrc.js)
