import 'wired-elements/lib/wired-item';

import { Attribute, Component } from '@angular/core';
import { Router } from '@angular/router';

import { generateTestIdWithPrefix, TEST_ID } from '../../test-helpers/test-id';
import { SelectedNavBarItemService } from './selected-nav-bar-item.service';

@Component({
  selector: 'ngx-nav-item',
  template: `
    <wired-item
      role="tab"
      class="tw-w-full tw-justify-center tw-text-center"
      [attr.data-testid]="dataTestId"
      [attr.aria-selected]="selected"
      [attr.value]="value"
      [attr.selected]="selected"
      (click)="itemSelected()"
    >
      <ng-content></ng-content>
    </wired-item>
  `,
})
export class NavItemComponent {
  constructor(
    @Attribute('value') public value: string,
    @Attribute(TEST_ID) public testIdSuffix: string,
    public selectedService: SelectedNavBarItemService,
    public router: Router,
  ) {}

  get dataTestId() {
    return generateTestIdWithPrefix({
      id: this.testIdSuffix,
      prefix: 'ngx-nav-bar-item',
    });
  }

  get selected() {
    return this.selectedService.selectedValue === this.value ? true : undefined;
  }

  itemSelected() {
    this.router.navigate([this.value]);
  }
}
