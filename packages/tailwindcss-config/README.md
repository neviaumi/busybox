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

3. In your project css

```css
@import '@busybox/tailwindcss-config/tailwind.css';
```

[React example](../react-components/tailwind.config.js)
[React example CSS](../react-components/.storybook/preview.css)
[Angular example config](https://github.com/davidNHK/angular-components/blob/531cdce0c49b517ae31163aead9cd338e484b56e/tailwind.config.js#L2)
[Angular example CSS](https://github.com/davidNHK/angular-components/blob/531cdce0c49b517ae31163aead9cd338e484b56e/projects/test-app/src/styles.css#L1)
