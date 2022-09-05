import 'wired-elements/lib/wired-listbox';

import { Attribute, Component } from '@angular/core';

import { generateTestIdWithPrefix, TEST_ID } from '../../test-helpers/test-id';
import { SelectedNavBarItemService } from './selected-nav-bar-item.service';

@Component({
  selector: 'ngx-nav-bar',
  template: `
    <wired-listbox
      role="tablist"
      class="tw-flex tw-w-full tw-justify-center"
      horizontal
      [attr.data-testid]="dataTestId"
      [attr.selected]="selectedService.selectedValue"
    >
      <ng-content></ng-content>
    </wired-listbox>
  `,
})
export class NavBarComponent {
  constructor(
    @Attribute(TEST_ID) public testIdSuffix: string,
    public selectedService: SelectedNavBarItemService,
  ) {}

  get dataTestId() {
    return generateTestIdWithPrefix({
      id: this.testIdSuffix,
      prefix: 'ngx-nav-bar',
    });
  }
}
