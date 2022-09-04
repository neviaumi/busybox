import 'wired-elements/lib/wired-button';

import {
  Attribute,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import cn from 'classnames';

import { generateTestIdWithPrefix, TEST_ID } from '../test-helpers/test-id';
import { palette } from '../theme';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'ngx-button',
  standalone: true,
  template: `<wired-button class="{{ classNames }}" data-testid="ngx-button"
    ><ng-content></ng-content
  ></wired-button>`,
})
export class ButtonComponent implements OnInit {
  testId = 'ngx-button';

  classNames = '';

  constructor(@Attribute(TEST_ID) public testIdSuffix: string) {
    this.classNames = cn(
      'primary',
      palette.primary.main,
      palette.primary.contrastText,
      palette.primary.hover.main,
      palette.primary.hover.contrastText,
    );
  }

  ngOnInit(): void {
    this.testId = generateTestIdWithPrefix({
      id: this.testIdSuffix,
      prefix: this.testId,
    });
  }
}
