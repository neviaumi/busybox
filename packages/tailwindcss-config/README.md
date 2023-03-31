# @busybox/tailwindcss

## Installation

- Install tailwindcss and config

```bash
npm install -D tailwindcss @busybox/tailwindcss-config
```

- In your project root `tailwind.config.js`

```js
module.exports = {
  presets: [require('@busybox/tailwindcss-config')],
};
```

- In your project css

```css
@import '@busybox/tailwindcss-config/tailwind.css';
```

[React example](https://github.com/davidNHK/react-components/blob/ac3aa619b0680297210346644df3476b2121bb10/tailwind.config.js#L1)

[React example CSS](https://github.com/davidNHK/react-components/blob/ac3aa619b0680297210346644df3476b2121bb10/.storybook/preview.css#L1)

[Angular example config](https://github.com/davidNHK/angular-components/blob/531cdce0c49b517ae31163aead9cd338e484b56e/tailwind.config.js#L2)

[Angular example CSS](https://github.com/davidNHK/angular-components/blob/531cdce0c49b517ae31163aead9cd338e484b56e/projects/test-app/src/styles.css#L1)
