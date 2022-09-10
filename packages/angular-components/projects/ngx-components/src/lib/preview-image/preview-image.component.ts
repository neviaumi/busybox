import 'wired-elements/lib/wired-image';

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

import { generateTestIdWithPrefix } from '../../test-helpers/test-id';

@Component({
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'ngx-preview-image',
  standalone: true,
  styles: [],
  template: `
    <wired-image [attr.src]="value" [attr.data-testid]="testId"> </wired-image>
  `,
})
export class PreviewImageComponent {
  @Input() value = '';

  @Input() 'data-testid' = '';

  get testId() {
    return generateTestIdWithPrefix({
      id: this['data-testid'],
      prefix: 'ngx-preview-image',
    });
  }
}
