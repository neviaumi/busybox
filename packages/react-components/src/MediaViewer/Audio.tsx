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
            <svg
              className="tw-h-6 tw-w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="tw-h-6 tw-w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </ReactWiredIconButton>
        <div>
          <div>
            <span className={'tw-font-bold'}>{audioDuration}</span> /{' '}
            {formatSecond(audioRef.current?.duration ?? 0)}
          </div>
          <div className={'tw-flex'}>
            <svg
              className="tw-h-6 tw-w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
