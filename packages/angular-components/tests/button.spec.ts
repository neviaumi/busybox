import { expect, test } from '@playwright/test';

test('render ngx-button correctly', async ({ page }) => {
  await page.goto('/demo/button');

  // create a locator
  const ngxButton = page.locator('[data-testid=ngx-button]');

  await expect(ngxButton).toBeVisible();
  await expect(ngxButton).toHaveText('Hello World');
});
