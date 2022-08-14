import { WiredCard } from 'wired-elements/lib/wired-card.js';

import type { ComponentProps } from '../components';
import { createReactComponentFromLitElement } from './wc-to-react';

const ReactWiredCard = createReactComponentFromLitElement<
  ComponentProps<unknown>
>('wired-card', WiredCard);

export default ReactWiredCard;
