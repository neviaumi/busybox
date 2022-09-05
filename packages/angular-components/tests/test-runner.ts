import { expect, Locator, test as baseTest } from '@playwright/test';

const test = baseTest.extend<{
  locateElementByTestId: (testId: string) => Locator;
}>({
  locateElementByTestId: async ({ page }, use) => {
    await use((testId: string) => {
      return page.locator(`[data-testid="${testId}"]`);
    });
  },
});

export { expect, test };
