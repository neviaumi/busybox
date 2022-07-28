# @busybox/tailwindcss

# Installation

1. Install tailwindcss and config

```
npm install -D tailwindcss @busybox/tailwindcss-config
```

2. In your project root `tailwind.config.js`

```js
module.exports = {
  presets: [require('@busybox/tailwindcss-config')],
};
```

[React Example](../react-components/tailwind.config.js)
