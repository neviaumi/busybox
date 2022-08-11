import classnames from 'classnames';

import WiredButton, { ButtonProps } from '../wired-elements/WiredButton';

export default function Button(props: ButtonProps) {
  const classes = classnames('hover:tw-bg-blue-400', 'hover:tw-text-gray-200');
  return (
    <div className={'tw-inline-block'}>
      <WiredButton
        aria-label={props.children}
        className={classes}
        data-testid={props['data-testid'] ?? 'wired-button'}
        onClick={props.onClick}
        role={'button'}
      >
        {props.children}
      </WiredButton>
    </div>
  );
}
