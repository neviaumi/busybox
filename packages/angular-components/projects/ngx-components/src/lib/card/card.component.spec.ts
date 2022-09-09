import { createTestBed } from '../../test-helpers/test-bed';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  const testBed = createTestBed(CardComponent, {
    imports: [CardComponent],
  });

  it('should have default data-testid', async () => {
    const { fixture } = await testBed.setupTest();
    const ngxButton: HTMLElement = fixture.nativeElement;
    const wiredButton = ngxButton.querySelector("[data-testid='ngx-card']");
    expect(wiredButton).toBeDefined();
  });
});
