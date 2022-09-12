import { createTestBed } from '../../test-helpers/test-bed';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  const testBed = createTestBed(CardComponent, {
    imports: [CardComponent],
  });

  it('should set data-testid', async () => {
    const { component, fixture } = await testBed.setupTest();
    component['data-testid'] = 'ngx-card';
    fixture.detectChanges();
    const ngxCard: HTMLElement = fixture.nativeElement;
    const wiredButton = ngxCard.querySelector("[data-testid='ngx-card']");
    expect(wiredButton).not.toBeNull();
  });
});
