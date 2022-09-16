import 'wired-elements/lib/wired-listbox';

import { Component, Input } from '@angular/core';

import { generateTestIdWithPrefix } from '../../test-helpers/test-id';
import { SelectedNavBarItemService } from './selected-nav-bar-item.service';

@Component({
  selector: 'ngx-nav-bar',
  template: `
    <wired-listbox
      role="tablist"
      class="tw-flex tw-w-full tw-justify-center"
      horizontal
      [attr.data-testid]="testId"
      [attr.selected]="selectedService.selectedValue"
    >
      <ng-content></ng-content>
    </wired-listbox>
  `,
})
export class NavBarComponent {
  @Input() 'data-testid' = '';

  constructor(public selectedService: SelectedNavBarItemService) {}

  get testId() {
    return generateTestIdWithPrefix({
      id: this['data-testid'],
      prefix: 'ngx-nav-bar',
    });
  }
}
