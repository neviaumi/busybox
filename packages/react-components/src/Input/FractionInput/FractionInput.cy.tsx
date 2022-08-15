import { composeStories } from '@storybook/testing-react';

import { cy, describe, it } from '../../test-helpers/test-runner.js';
import { palette } from '../../theme.js';
import * as stories from './FractionInput.stories.js';

const { FractionInput } = composeStories(stories);

describe('FractionInput stories', () => {
  it('should mark input border red when value not have expected format', () => {
    cy.mount(<FractionInput onChange={cy.stub()} />);
    cy.findByTestId('test-fraction-input')
      .shadow()
      .findByTestId('test-fraction-input-raw-input')
      .type('HaHaHa');
    cy.findByTestId('test-fraction-input-submit-button').click();
    cy.findByTestId('test-fraction-input').should(
      'have.class',
      palette.error.text,
    );
  });
});