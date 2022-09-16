import 'wired-elements/lib/wired-button';

import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import cn from 'classnames';

import { generateTestIdWithPrefix } from '../../test-helpers/test-id';
import { CardComponent } from '../card/card.component';
import { palette } from '../theme';
import { Variant } from '../variant';

@Component({
  imports: [CommonModule, CardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'ngx-button',
  standalone: true,
  template: ` <button
      (click)="onHiddenButtonClick($event)"
      [attr.type]="buttonType"
      class="tw-hidden"
      #hiddenButton
    >
      <ng-content></ng-content>
    </button>
    <ngx-card
      role="button"
      class="tw-cursor-pointer tw-select-none {{ classNames }}"
      [data-testid]="testId"
      [hover]="hover"
      [variant]="variant"
    >
      <ng-content></ng-content>
    </ngx-card>`,
})
export class ButtonComponent implements OnInit {
  @ViewChild('hiddenButton')
  hiddenButton?: ElementRef<HTMLInputElement>;

  hover = false;

  classNames = '';

  @Input() 'data-testid' = 'ngx-button';

  @Input() buttonType = '';

  @Input() variant: Variant.Primary | Variant.Secondary = Variant.Primary;

  @HostListener('click', ['$event'])
  onButtonClick(event: Event) {
    event.preventDefault();
    this.hiddenButton?.nativeElement.click();
  }

  onHiddenButtonClick(event: Event) {
    event.stopPropagation();
  }

  ngOnInit(): void {
    this.classNames = cn(this.variant, {
      [palette.primary.contrastText]: this.variant === Variant.Primary,
      [palette.primary.hover.contrastText]: this.variant === Variant.Primary,
      [palette.secondary.contrastText]: this.variant === Variant.Secondary,
      [palette.secondary.hover.contrastText]:
        this.variant === Variant.Secondary,
    });
  }

  get testId() {
    return generateTestIdWithPrefix({
      id: this['data-testid'],
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
