import classnames from 'classnames';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { WiredButton } from 'wired-elements/lib/wired-button.js';

import { createReactComponentFromLitElement } from '../wc-to-react.js';

export type ButtonProps = PropsWithChildren<{
  'data-testid'?: string;
  onClick: () => void;
}>;

const ReactWiredButton = createReactComponentFromLitElement<
  ButtonProps & {
    className: string;
  }
>('wired-button', WiredButton);

export default function Button(props: ButtonProps) {
  const classes = classnames('hover:tw-bg-blue-400', 'hover:tw-text-gray-200');
  return (
    <ReactWiredButton
      className={classes}
      data-testid={props['data-testid'] ?? 'wired-button'}
      onClick={props.onClick}
    >
      {props.children}
    </ReactWiredButton>
  );
}
