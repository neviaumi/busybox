import { useCallback, useEffect, useRef, useState } from 'react';

import IconButton from '../Button/IconButton.js';
import { MicrophoneIcon, StopIcon } from '../icons/solid.js';
import { useAudioRecorder } from './use-media-recorder.js';

export type AudioRecordProps = {
  'data-testid'?: string;
  onFinishRecording: (chunks: Blob[]) => void;
};

export default function AudioRecorder(props: AudioRecordProps) {
  const testId = props['data-testid'];
  const [audioRecorder, recorderError, recordChunks] = useAudioRecorder({
    mimeType: 'audio/webm',
  });
  const [isRecording, setIsRecording] = useState(false);
  const recordingChunks = useRef<unknown[] | null>(null);
  const toggleIsRecording = useCallback(() => {
    if (isRecording) {
      audioRecorder?.stop();
      setIsRecording(false);
    } else {
      recordingChunks.current = [];
      audioRecorder?.start();
      setIsRecording(true);
    }
  }, [audioRecorder, isRecording]);
  useEffect(() => {
    if (!audioRecorder) return undefined;
    const onRecorderStop = () => {
      props.onFinishRecording(recordChunks.current!);
      recordChunks.current = null;
    };
    audioRecorder.addEventListener('stop', onRecorderStop);
    return () => {
      audioRecorder.removeEventListener('stop', onRecorderStop);
    };
  }, [audioRecorder, props, recordChunks]);
  if (!audioRecorder) return null;
  if (recorderError)
    return (
      <div>
        <h1>{recorderError.name}</h1>
        <main>{recorderError.message}</main>
      </div>
    );
  return (
    <IconButton data-testid={testId} onClick={toggleIsRecording}>
      {isRecording ? <StopIcon /> : <MicrophoneIcon />}
    </IconButton>
  );
}
