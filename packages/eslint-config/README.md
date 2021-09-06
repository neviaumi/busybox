# @busybox/eslint-config

# Installation

1. Install peerDependencies

```
npm install --save-dev @busybox/eslint-config
```

2. Setup [prettier](../prettier-config)

3) In your project root `eslint.js`

```js
'use strict';

module.exports = {
  extends: ['@busybox'],
};
```

[Example](../../.eslintrc.js)
