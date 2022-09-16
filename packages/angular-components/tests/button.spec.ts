import { expect, test } from './test-runner';

test('render ngx-button correctly', async ({ locateElementByTestId, page }) => {
  await page.goto('/demo/button');

  // create a locator
  const ngxButton = locateElementByTestId('ngx-button-demo');

  await expect(ngxButton).toBeVisible();
  await expect(ngxButton).toHaveText('Hello World');
});
