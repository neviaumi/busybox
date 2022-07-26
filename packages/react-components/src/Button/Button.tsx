import type { PropsWithChildren } from 'react';
import { WiredButton } from 'wired-elements/lib/wired-button.js';

import { createReactComponentFromLitElement } from '../wc-to-react.js';

export type ButtonProps = PropsWithChildren<{
  'data-testid'?: string;
  onClick: () => void;
}>;

const ReactWiredButton = createReactComponentFromLitElement<ButtonProps>(
  'wired-button',
  WiredButton,
);

export default function Button(props: ButtonProps) {
  return (
    <ReactWiredButton
      data-testid={props['data-testid'] ?? 'wired-button'}
      onClick={props.onClick}
    >
      {props.children}
    </ReactWiredButton>
  );
}
