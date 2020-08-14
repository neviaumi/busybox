# @busybox/prettier-config

# Installation

1. Install prettier and config
```
yarn add --dev prettier @busybox/prettier-config
```

2. In your project root `.prettierrc.js`

```js
module.exports = {
  ...require('@busybox/prettier-config'),
};
```
[Example](../../.prettierrc.js)