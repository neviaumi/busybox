import classnames from 'classnames';
import { WiredButton } from 'wired-elements/lib/wired-button.js';

import type { ComponentProps } from '../components.js';
import { createReactComponentFromLitElement } from '../wc-to-react.js';

export type ButtonProps = ComponentProps<{
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
    <div className={'tw-inline-block'}>
      <ReactWiredButton
        aria-label={props.children}
        className={classes}
        data-testid={props['data-testid'] ?? 'wired-button'}
        onClick={props.onClick}
        role={'button'}
      >
        {props.children}
      </ReactWiredButton>
    </div>
  );
}
