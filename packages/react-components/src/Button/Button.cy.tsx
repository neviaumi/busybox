import { composeStories } from '@storybook/testing-react';

import { cy, describe, it } from '../test-helpers/test-runner.js';
import * as stories from './Button.stories.js';

const { Primary } = composeStories(stories);

describe('Button stories', () => {
  it('Primary button', () => {
    const clickCallback = cy.stub().as('clickCallback');
    cy.mount(
      <Primary data-testid={'test-primary-button'} onClick={clickCallback}>
        Primary button test
      </Primary>,
    );

    cy.findByTestId('test-primary-button').click();
    cy.wrap(clickCallback).should('be.called');
  });
});
