import { WiredButton } from 'wired-elements/lib/wired-button.js';

import type { ComponentProps } from '../components.js';
import { createReactComponentFromLitElement } from './wc-to-react.js';

export type ButtonProps = ComponentProps<{
  onClick: () => void;
}>;

const ReactWiredButton = createReactComponentFromLitElement<
  ButtonProps & {
    className: string;
  }
>('wired-button', WiredButton);

export default ReactWiredButton;
