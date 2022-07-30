import { composeStories } from '@storybook/testing-react';

import { cy, describe, it } from '../test-helpers/test-runner.js';
import * as stories from './Audio.stories.js';

const { AudioPreviewWhenFileUpload } = composeStories(stories);

describe('AudioPreviewWhenFileUpload stories', () => {
  it('Should show audio control when selected file to upload', () => {
    cy.mount(
      <AudioPreviewWhenFileUpload data-testid={'test-file-upload'}>
        Audio File upload test
      </AudioPreviewWhenFileUpload>,
    );

    cy.fixture('sunshine-of-your-love.mp3').as('testUploadFixture');

    cy.findByTestId('test-file-upload-raw-upload-input').selectFile(
      '@testUploadFixture',
      { force: true },
    );

    cy.findByTestId('test-file-upload-audio-controls').should('be.visible');
  });
});
