import 'wired-elements/lib/wired-card';

import { CommonModule } from '@angular/common';
import { Attribute, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { generateTestIdWithPrefix, TEST_ID } from '../../test-helpers/test-id';
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
    >
      <ng-content></ng-content>
    </wired-card>
  `,
})
export class CardComponent {
  testId = 'ngx-card';

  constructor(
    @Attribute(TEST_ID) public testIdSuffix: string,
    @Attribute(VARIANT) public variant: Variant,
    public rootCssVariablesService: RootCssVariablesService,
  ) {
    this.testId = generateTestIdWithPrefix({
      id: testIdSuffix,
      prefix: this.testId,
    });
  }

  get fill() {
    if (this.variant === Variant.Warning) {
      return this.rootCssVariablesService.getVariable('colors-warning');
    }
    return this.rootCssVariablesService.getVariable('colors-primary');
  }
}
