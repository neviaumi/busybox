import { PauseIcon, PlayIcon, VolumeUpIcon } from '@heroicons/react/outline';
import parseMilliseconds from 'parse-ms';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { ComponentProps } from '../components.js';
import WiredIconButton from '../wired-elements/WiredIconButton';
import WiredSlider from '../wired-elements/WiredSlider';

export type AudioProps = ComponentProps<{
  src: string;
  type: string;
}>;

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
        <WiredIconButton onClick={toggleAudioPlay}>
          {audioPlaying ? (
            <PauseIcon className={'tw-h-3 tw-w-3'} />
          ) : (
            <PlayIcon className={'tw-h-3 tw-w-3'} />
          )}
        </WiredIconButton>
        <div>
          <div>
            <span className={'tw-font-bold'}>{audioDuration}</span> /{' '}
            {formatSecond(audioRef.current?.duration ?? 0)}
          </div>
          <div className={'tw-flex tw-items-center'}>
            <VolumeUpIcon className={'tw-h-3 tw-w-3'} />
            <WiredSlider
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
