// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands.js';

import { setGlobalConfig } from '@storybook/testing-react';
// Alternatively you can use CommonJS syntax:
// require('./commands')
import { mount } from 'cypress/react18';
import type { PropsWithChildren } from 'react';

import * as globalStorybookConfig from '../../.storybook/preview.js';
import { cy, Cypress } from '../../src/test-helpers/test-runner.js';

setGlobalConfig(globalStorybookConfig);

function TestBed(props: PropsWithChildren) {
  // @ts-expect-error https://github.com/cypress-io/cypress/issues/23025
  import('../../.storybook/preview.css');
  return (
    <main>
      <h1
        className={
          'tw-mb-1 tw-block tw-border-b-2 tw-border-red-400 tw-bg-blue-100 tw-text-center tw-text-9xl' +
          ' tw-font-bold tw-text-gray-600'
        }
      >
        TestBed
      </h1>
      {props.children}
    </main>
  );
}

Cypress.Commands.add('mount', element => mount(<TestBed>{element}</TestBed>));

// Example use:
// cy.mount(<MyComponent />)
Cypress.Commands.add('getComponentCanvasRoot', () => {
  return cy.get(`div[data-cy-root]`);
});
// Should sync with ./component-index.html
