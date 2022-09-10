import 'wired-elements/lib/wired-button';

import { CommonModule } from '@angular/common';
import {
  Attribute,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  HostListener,
} from '@angular/core';
import cn from 'classnames';

import { generateTestIdWithPrefix, TEST_ID } from '../../test-helpers/test-id';
import { CardComponent } from '../card/card.component';
import { palette } from '../theme';

@Component({
  imports: [CommonModule, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'ngx-button',
  standalone: true,
  template: `<ngx-card
    class="tw-cursor-pointer {{ classNames }}"
    [testId]="testId"
    [hover]="hover"
  >
    <ng-content></ng-content>
  </ngx-card>`,
})
export class ButtonComponent {
  hover = false;

  classNames = '';

  constructor(@Attribute(TEST_ID) public testIdSuffix: string) {
    this.classNames = cn(
      'primary',
      palette.primary.contrastText,
      palette.primary.hover.contrastText,
    );
  }

  get testId() {
    return generateTestIdWithPrefix({
      id: this.testIdSuffix,
      prefix: 'ngx-button',
    });
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }
}
