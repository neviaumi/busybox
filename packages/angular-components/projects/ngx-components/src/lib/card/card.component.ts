import 'wired-elements/lib/wired-card';

import { CommonModule } from '@angular/common';
import {
  Attribute,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
} from '@angular/core';

import { RootCssVariablesService } from '../root-css-variables.service';
import { VARIANT, Variant } from '../variant';

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

  @Input() public testId = 'ngx-card';

  constructor(
    @Attribute(VARIANT) public variant: Variant,
    public rootCssVariablesService: RootCssVariablesService,
  ) {}

  get fill() {
    if (this.variant === Variant.Warning) {
      if (this.hover) {
        return this.rootCssVariablesService.getVariable('colors-warning-hover');
      }
      return this.rootCssVariablesService.getVariable('colors-warning');
    }
    if (this.hover) {
      return this.rootCssVariablesService.getVariable('colors-primary-hover');
    }
    return this.rootCssVariablesService.getVariable('colors-primary');
  }
}
