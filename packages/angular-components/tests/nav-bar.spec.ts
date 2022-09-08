import { expect, test } from './test-runner';

test.describe('<nav-ber>', () => {
  test('should auto select item1 when url is tab1', async ({
    locateElementByTestId,
    page,
  }) => {
    await page.goto('/demo/nav-bar/tab1');
    const ngxNavBarItem = locateElementByTestId('ngx-nav-bar-item-demo-item1');
    await expect(ngxNavBarItem).toBeVisible();
    await expect(ngxNavBarItem).toHaveAttribute('aria-selected', 'true');
  });
  test('should redirect to tab2 when click is item2', async ({
    locateElementByTestId,
    page,
  }) => {
    await page.goto('/demo/nav-bar/tab1');
    const ngxNavBarItem = locateElementByTestId('ngx-nav-bar-item-demo-item2');
    await expect(ngxNavBarItem).toBeVisible();
    ngxNavBarItem.click();
    await expect(page).toHaveURL('/demo/nav-bar/tab2');
  });
});
