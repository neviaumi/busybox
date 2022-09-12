import { expect, test } from './test-runner';

test('render ngx-file-upload correctly', async ({
  locateElementByTestId,
  page,
}) => {
  await page.goto('/demo/file-upload');

  // create a locator
  const [fileChooser] = await Promise.all([
    // It is important to call waitForEvent before click to set up waiting.
    page.waitForEvent('filechooser'),
    locateElementByTestId('ngx-file-upload-demo').click(),
  ]);
  await fileChooser.setFiles('fixtures/256x256.png');

  const previewImage = locateElementByTestId('ngx-preview-image-demo');
  await expect(previewImage).toBeVisible();
});
