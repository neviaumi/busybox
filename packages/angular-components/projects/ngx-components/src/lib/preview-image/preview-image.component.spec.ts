import { createTestBed } from '../../test-helpers/test-bed';
import { PreviewImageComponent } from './preview-image.component';

describe('PreviewImageComponent', () => {
  const testBed = createTestBed(PreviewImageComponent, {
    imports: [PreviewImageComponent],
  });
  it('should have default data-testid', async () => {
    const { fixture } = await testBed.setupTest();
    const ngxPreviewImage: HTMLElement = fixture.nativeElement;
    const wiredImage = ngxPreviewImage.querySelector(
      "[data-testid='ngx-preview-image']",
    );
    expect(wiredImage).not.toBeNull();
  });
});
