import 'wired-elements/lib/wired-item';

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { generateTestIdWithPrefix } from '../../test-helpers/test-id';
import { SelectedNavBarItemService } from './selected-nav-bar-item.service';

@Component({
  selector: 'ngx-nav-item[value]',
  template: `
    <wired-item
      role="tab"
      class="tw-w-full tw-justify-center tw-text-center"
      [attr.data-testid]="testId"
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
  @Input() value!: string;

  @Input() 'data-testid' = '';

  constructor(
    public selectedService: SelectedNavBarItemService,
    public router: Router,
  ) {}

  get testId() {
    return generateTestIdWithPrefix({
      id: this['data-testid'],
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
