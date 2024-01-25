import assert from 'node:assert';
import { describe, it } from 'node:test';

import tailwindConfig from '../tailwind.config.js';
import { withSpacing } from './with-spacing.js';

describe('with-spacing', () => {
  it('should add 4px system to spacing as 0.5 interval', () => {
    const { theme } = withSpacing(tailwindConfig);
    assert.equal(Object.keys(theme.spacing).length, 258);
    assert.equal(theme.spacing['0'], '0');
    assert.equal(theme.spacing['px'], `1px`);
    Object.keys(theme.spacing)
      .filter(key => !['0', 'px'].includes(key))
      .map(key => [key, Number(key) * 8.0])
      .forEach(([key, px]) => {
        assert.equal(theme.spacing[key], `${px / 16}rem`);
      });
  });
});
