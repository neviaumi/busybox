import { WiredIconButton } from 'wired-elements/lib/wired-icon-button.js';

import type { ComponentProps } from '../components';
import { createReactComponentFromLitElement } from './wc-to-react';

const ReactWiredIconButton = createReactComponentFromLitElement<
  ComponentProps<{
    onClick: () => void;
  }>
>('wired-icon-button', WiredIconButton);

export default ReactWiredIconButton;
