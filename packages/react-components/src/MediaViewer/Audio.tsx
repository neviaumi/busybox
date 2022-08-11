import { PauseIcon, PlayIcon, VolumeUpIcon } from '@heroicons/react/outline';
import parseMilliseconds from 'parse-ms';
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { WiredIconButton } from 'wired-elements/lib/wired-icon-button.js';
import { WiredSlider } from 'wired-elements/lib/wired-slider.js';

import type { ComponentProps } from '../components.js';
import { createReactComponentFromLitElement } from '../wc-to-react.js';

export type AudioProps = ComponentProps<{
  src: string;
  type: string;
}>;

type SliderProps = ComponentProps<{
  disabled?: boolean;
  max?: number;
  min: number;
  onChange: (event: CustomEvent) => void;
  value: number;
}>;

const ReactWiredSlider = createReactComponentFromLitElement<
  SliderProps & {
    ref: MutableRefObject<null | WiredSlider>;
  }
>('wired-slider', WiredSlider);

function Slider(props: SliderProps) {
  const sliderRef = useRef<WiredSlider>(null);
  if (sliderRef.current) {
    sliderRef.current.value = props.value;
  }
  return <ReactWiredSlider {...props} ref={sliderRef} />;
}

const ReactWiredIconButton = createReactComponentFromLitElement<
  ComponentProps<{
    onClick: () => void;
  }>
>('wired-icon-button', WiredIconButton);

function formatSecond(second: number) {
  if (isNaN(second)) return '00:00';
  const { minutes, seconds } = parseMilliseconds(second * 1000);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0',
  )}`;
}

export default function Audio({
  'data-testid': testId,
  src,
  type,
}: AudioProps) {
  const [audioError, setAudioError] = useState<Error | null>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState('00:00');
  const [audioVolume, setAudioVolume] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const toggleAudioPlay = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      if (audioPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setAudioVolume((audioRef.current.volume ?? 0) * 100);
      setAudioPlaying(prevState => !prevState);
    } catch (e) {
      setAudioError(e as Error);
    }
  }, [audioPlaying]);
  const adjustAudioVolume = useCallback((event: CustomEvent) => {
    if (!audioRef.current) return;
    const volume = event.detail.value;
    setAudioVolume(volume);
    audioRef.current.volume = volume / 100.0;
  }, []);
  useEffect(function subscribeAudioTimeChange() {
    const audioEle = audioRef.current;
    const updateAudioCurrentTime: (event: Event) => void = () =>
      setAudioDuration(formatSecond(audioRef.current?.currentTime ?? 0));
    audioEle?.addEventListener('timeupdate', updateAudioCurrentTime);
    return () =>
      audioEle?.removeEventListener('timeupdate', updateAudioCurrentTime);
  }, []);
  if (audioError)
    return (
      <>
        <div>Error: {audioError.message}</div>
      </>
    );
  return (
    <>
      <audio ref={audioRef}>
        <source src={src} type={type} />
      </audio>
      <div
        className={'tw-flex tw-items-center'}
        data-testid={testId && `${testId}-audio-controls`}
      >
        <ReactWiredIconButton onClick={toggleAudioPlay}>
          {audioPlaying ? (
            <PauseIcon className={'tw-h-3 tw-w-3'} />
          ) : (
            <PlayIcon className={'tw-h-3 tw-w-3'} />
          )}
        </ReactWiredIconButton>
        <div>
          <div>
            <span className={'tw-font-bold'}>{audioDuration}</span> /{' '}
            {formatSecond(audioRef.current?.duration ?? 0)}
          </div>
          <div className={'tw-flex tw-items-center'}>
            <VolumeUpIcon className={'tw-h-3 tw-w-3'} />
            <Slider
              disabled={audioRef.current === null}
              max={100}
              min={0}
              onChange={adjustAudioVolume}
              value={audioVolume}
            />
          </div>
        </div>
      </div>
    </>
  );
}
