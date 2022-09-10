import 'wired-elements/lib/wired-card';

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

import { RootCssVariablesService } from '../root-css-variables.service';
import { Variant } from '../variant';

@Component({
  imports: [CommonModule],
  providers: [RootCssVariablesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'ngx-card',
  standalone: true,
  template: `
    <wired-card
      class="tw-w-full"
      [attr.data-testid]="testId"
      [attr.fill]="fill"
      [attr.data-hover]="hover"
    >
      <ng-content></ng-content>
    </wired-card>
  `,
})
export class CardComponent {
  @Input() public hover = false;

  @Input() public 'data-testid' = 'ngx-card';

  @Input() public variant: Variant = Variant.Primary;

  constructor(public rootCssVariablesService: RootCssVariablesService) {}

  get testId() {
    return this['data-testid'];
  }

  get fill() {
    if (this.variant === Variant.Warning) {
      if (this.hover) {
        return this.rootCssVariablesService.getVariable('colors-warning-hover');
      }
      return this.rootCssVariablesService.getVariable('colors-warning');
    }
    if (this.variant === Variant.Secondary) {
      if (this.hover) {
        return this.rootCssVariablesService.getVariable(
          'colors-secondary-hover',
        );
      }
      return this.rootCssVariablesService.getVariable('colors-secondary');
    }
    if (this.hover) {
      return this.rootCssVariablesService.getVariable('colors-primary-hover');
    }
    return this.rootCssVariablesService.getVariable('colors-primary');
  }
}
