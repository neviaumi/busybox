declare global {
  interface Window {
    Cypress: Cypress.Cypress;
    assert: Chai.AssertStatic;
    cy: Cypress.cy;
    expect: Chai.ExpectStatic;
  }
}

export const Cypress: Cypress.Cypress = window.Cypress;
export const cy: Cypress.cy = window.cy;
export const expect: Chai.ExpectStatic = window.expect;
export const assert: Chai.AssertStatic = window.assert;
export const describe: Mocha.SuiteFunction = window.describe;
export const context: Mocha.SuiteFunction = window.context;
export const xdescribe: Mocha.PendingSuiteFunction = window.xdescribe;
export const xcontext: Mocha.PendingSuiteFunction = window.xcontext;
export const before: Mocha.HookFunction = window.before;
export const beforeEach: Mocha.HookFunction = window.beforeEach;
export const after: Mocha.HookFunction = window.after;
export const afterEach: Mocha.HookFunction = window.afterEach;
export const it: Mocha.TestFunction = window.it;
export const test: Mocha.TestFunction = window.test;
export const xit: Mocha.PendingTestFunction = window.xit;
