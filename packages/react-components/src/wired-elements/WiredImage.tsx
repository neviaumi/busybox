import { WiredImage } from 'wired-elements/lib/wired-image';

import type { ComponentProps } from '../components';
import { createReactComponentFromLitElement } from './wc-to-react';

export type ImageProps = ComponentProps<{
  alt: string;
  src: string;
}>;
const ReactWiredImage = createReactComponentFromLitElement<ImageProps>(
  'wired-image',
  WiredImage,
);

export default ReactWiredImage;
