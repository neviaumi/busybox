# @busybox/eslint-config

**That config assumes your are using typescript for development**

# Installation

1. Install peerDependencies

```
yarn add --dev eslint prettier typescript
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
