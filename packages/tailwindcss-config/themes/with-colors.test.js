import assert from 'node:assert';
import { describe, it } from 'node:test';

import { path, pickAll } from 'ramda';

import tailwindConfig from '../tailwind.config.js';
import { Variant, withColors } from './with-colors.js';

const pickAllVariant = pickAll(Object.values(Variant));
const mockThemeFunction = theme => pathString =>
  path(pathString.split('.'), theme);

describe('withColors', () => {
  it('should set available colors set', () => {
    const { theme } = withColors(tailwindConfig);
    assert.deepStrictEqual(theme.colors, {
      amber: {
        200: '#fde68a',
        300: '#fcd34d',
        500: '#f59e0b',
        600: '#d97706',
        800: '#92400e',
        900: '#78350f',
      },
      black: '#000',
      current: 'currentColor',
      emerald: {
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        50: '#ecfdf5',
      },
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        50: '#f9fafb',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
      rose: {
        200: '#fecdd3',
        300: '#fda4af',
        500: '#f43f5e',
        600: '#e11d48',
        800: '#9f1239',
        900: '#881337',
      },
      sky: {
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        50: '#f0f9ff',
        500: '#0ea5e9',
        800: '#075985',
        900: '#0c4a6e',
      },
      transparent: 'transparent',
      white: '#fff',
    });
  });

  it('function on outlineColor should set variant', () => {
    const { theme } = withColors(tailwindConfig);
    const outlineColors = pickAllVariant(
      theme.outlineColor({
        theme: mockThemeFunction(theme),
      }),
    );
    assert.deepStrictEqual(outlineColors, {
      disabled: {
        DEFAULT: '#d1d5db',
      },
      error: {
        DEFAULT: '#f43f5e',
      },
      placeholder: undefined,
      primary: {
        DEFAULT: '#a7f3d0',
      },
      secondary: {
        DEFAULT: '#bae6fd',
      },
      warning: {
        DEFAULT: '#f59e0b',
      },
    });
  });

  it('function on ringColor should set variant', () => {
    const { theme } = withColors(tailwindConfig);
    const ringColors = pickAllVariant(
      theme.ringColor({
        theme: mockThemeFunction(theme),
      }),
    );
    assert.deepStrictEqual(ringColors, {
      disabled: {
        DEFAULT: '#d1d5db',
      },
      error: {
        DEFAULT: '#f43f5e',
      },
      placeholder: undefined,
      primary: {
        DEFAULT: '#a7f3d0',
      },
      secondary: {
        DEFAULT: '#bae6fd',
      },
      warning: {
        DEFAULT: '#f59e0b',
      },
    });
  });

  it('function on borderColor should set variant', () => {
    const { theme } = withColors(tailwindConfig);
    const borderColors = pickAllVariant(
      theme.borderColor({
        theme: mockThemeFunction(theme),
      }),
    );
    assert.deepStrictEqual(borderColors, {
      disabled: {
        DEFAULT: '#e5e7eb',
      },
      error: {
        DEFAULT: '#f43f5e',
        'user-action': '#e11d48',
      },
      placeholder: undefined,
      primary: {
        DEFAULT: '#a7f3d0',
        'user-action': '#6ee7b7',
      },
      secondary: {
        DEFAULT: '#bae6fd',
        'user-action': '#7dd3fc',
      },
      warning: {
        DEFAULT: '#f59e0b',
        'user-action': '#d97706',
      },
    });
  });

  it('function on backgroundColor should set variant', () => {
    const { theme } = withColors(tailwindConfig);
    const backgroundColors = pickAllVariant(
      theme.backgroundColor({
        theme: mockThemeFunction(theme),
      }),
    );
    assert.deepStrictEqual(backgroundColors, {
      disabled: {
        DEFAULT: '#f3f4f6',
      },
      error: {
        DEFAULT: '#fecdd3',
        'user-action': '#fda4af',
      },
      placeholder: undefined,
      primary: {
        DEFAULT: '#ecfdf5',
        'user-action': '#d1fae5',
      },
      secondary: {
        DEFAULT: '#f0f9ff',
        'user-action': '#e0f2fe',
      },
      warning: {
        DEFAULT: '#fde68a',
        'user-action': '#fcd34d',
      },
    });
  });

  it('function on textColor should set variant', () => {
    const { theme } = withColors(tailwindConfig);
    const textColors = pickAllVariant(
      theme.textColor({
        theme: mockThemeFunction(theme),
      }),
    );
    assert.deepStrictEqual(textColors, {
      disabled: {
        DEFAULT: '#9ca3af',
      },
      error: {
        DEFAULT: '#f43f5e',
        contrast: '#9f1239',
        'user-action': '#881337',
      },
      placeholder: {
        DEFAULT: '#6b7280',
      },
      primary: {
        DEFAULT: '#000',
        contrast: '#1f2937',
        'user-action': '#111827',
      },
      secondary: {
        DEFAULT: '#0ea5e9',
        contrast: '#075985',
        'user-action': '#0c4a6e',
      },
      warning: {
        DEFAULT: '#f59e0b',
        contrast: '#92400e',
        'user-action': '#78350f',
      },
    });
  });
});
