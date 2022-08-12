import {
  MicrophoneIcon as _MicrophoneIcon,
  PauseIcon as _PauseIcon,
  PlayIcon as _PlayIcon,
  StopIcon as _StopIcon,
  VolumeUpIcon as _VolumeUpIcon,
} from '@heroicons/react/solid';
import classnames from 'classnames';
import type React from 'react';

import { icon } from '../theme.js';

export function withHeroSolidIcon(HeroSolidIcon: React.FunctionComponent) {
  return function Wrapper(props: React.ComponentProps<'svg'>) {
    const className = classnames(
      icon.solid.width,
      icon.solid.height,
      ...(props.className ?? '').split(' '),
    );
    return <HeroSolidIcon className={className} {...props} />;
  };
}
export const PauseIcon = withHeroSolidIcon(_PauseIcon);
export const PlayIcon = withHeroSolidIcon(_PlayIcon);
export const VolumeUpIcon = withHeroSolidIcon(_VolumeUpIcon);
export const MicrophoneIcon = withHeroSolidIcon(_MicrophoneIcon);
export const StopIcon = withHeroSolidIcon(_StopIcon);
