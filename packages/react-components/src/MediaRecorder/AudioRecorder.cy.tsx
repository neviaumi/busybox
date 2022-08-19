import { composeStories } from '@storybook/testing-react';

import { cy, describe, it } from '../test-helpers/test-runner.js';
import * as stories from './AudioRecorder.stories.js';

const { AudioRecorderWithPreview } = composeStories(stories);

describe('AudioPreviewWhenFileUpload stories', () => {
  it('Should show audio control when finish recoding', () => {
    cy.mount(<AudioRecorderWithPreview data-testid={'test-audio-recorder'} />);
    cy.findByTestId('test-audio-recorder').click();
    cy.findByTestId('test-audio-recorder').click();
    cy.findByTestId('test-audio-recorder-preview').should('be.visible');
  });
});
