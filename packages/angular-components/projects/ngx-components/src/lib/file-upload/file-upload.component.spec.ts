import { createTestBed } from '../../test-helpers/test-bed';
import { FileUploadComponent } from './file-upload.component';

describe('FileUploadComponent', () => {
  const testBed = createTestBed(FileUploadComponent, {
    imports: [FileUploadComponent],
  });
  it('should have default data-testid', async () => {
    const { fixture } = await testBed.setupTest();
    const ngxFileUpload: HTMLElement = fixture.nativeElement;
    const uploadButton = ngxFileUpload.querySelector(
      "[data-testid='ngx-button-ngx-file-upload']",
    );
    const hiddenUploadInput = ngxFileUpload.querySelector(
      "[data-testid='ngx-file-upload-hidden-input']",
    );

    expect(uploadButton).not.toBeNull();
    expect(hiddenUploadInput).not.toBeNull();
  });
});
