import { useCallback, useRef } from 'react';
import { WiredLink } from 'wired-elements/lib/wired-link.js';

import type { ComponentProps } from '../components.js';
import { createReactComponentFromLitElement } from './wc-to-react.js';

export type LinkProps = ComponentProps<{
  download?: string | boolean;
  href: string;
  target?: string;
}>;

const ReactWiredLink = createReactComponentFromLitElement<
  LinkProps & {
    onClick?: (event: Event) => void;
  }
>('wired-link', WiredLink);

export default function Link(props: LinkProps) {
  const hiddenLink = useRef<HTMLAnchorElement | null>(null);
  const onLinkClicked = useCallback((event: Event) => {
    event.preventDefault();
    if (!hiddenLink.current) return;
    hiddenLink.current.click();
  }, []);

  return (
    <>
      <a {...props} className={'tw-hidden'} ref={hiddenLink} />
      <ReactWiredLink href={props.href} onClick={onLinkClicked}>
        {props.children}
      </ReactWiredLink>
    </>
  );
}
