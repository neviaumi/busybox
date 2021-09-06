# @busybox/npm-package-json-lint-config

# Installation

1. Install prettier and config

```
npm install --save-dev @busybox/npm-package-json-lint-config
```

2. In your project root `npmpackagejsonlint.config`

```js
'use strict';

module.exports = {
  extends: '@busybox/npm-package-json-lint-config',
};
```

[Example](../../npmpackagejsonlint.config.js)
