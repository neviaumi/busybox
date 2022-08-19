import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useCallback, useState } from 'react';

import Audio from '../MediaViewer/Audio.js';
import { generateTestIdWithPrefix } from '../test-helpers/test-id.js';
import Link from '../wired-elements/WiredLink.js';
import AudioRecorderComponent from './AudioRecorder.js';

export default {
  component: AudioRecorderComponent,
  subcomponents: { Audio },
  title: 'Component/MediaRecorder/Audio',
} as ComponentMeta<typeof AudioRecorderComponent>;

export const AudioRecorderWithPreview: ComponentStory<
  typeof AudioRecorderComponent
> = args => {
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const onFinishRecording = useCallback((chunks: Blob[]) => {
    const blob = new Blob(chunks);
    setDownloadUrl(URL.createObjectURL(blob));
  }, []);
  return (
    <div className={'tw-flex tw-flex-col'}>
      <AudioRecorderComponent {...args} onFinishRecording={onFinishRecording} />
      {downloadUrl && (
        <div
          data-testid={generateTestIdWithPrefix({
            id: 'preview',
            prefix: args['data-testid'],
          })}
        >
          <Audio src={downloadUrl} type={'audio/webm'} />
          <Link download={'recording.webm'} href={downloadUrl}>
            Download Record here
          </Link>
        </div>
      )}
    </div>
  );
};
