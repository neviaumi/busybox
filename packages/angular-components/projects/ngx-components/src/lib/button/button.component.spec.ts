import { createTestBed } from '../../test-helpers/test-bed';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  const testBed = createTestBed(ButtonComponent, {
    imports: [ButtonComponent],
  });

  it('should have default data-testid', async () => {
    const { fixture } = await testBed.setupTest();
    const ngxButton: HTMLElement = fixture.nativeElement;
    const wiredButton = ngxButton.querySelector("[data-testid='ngx-button']");
    expect(wiredButton).not.toBeNull();
  });
});
