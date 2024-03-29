import '@testing-library/cypress';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getBySel(
        dataTestAttribute: string,
        commandArguments?: any,
      ): Chainable<JQuery<HTMLElement>>;
      getBySelLike(
        dataTestPrefixAttribute: string,
        commandArguments?: any,
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
