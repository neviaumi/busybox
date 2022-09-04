import { Component } from '@angular/core';
import { ButtonComponent } from '@busybox/ngx-components';

@Component({
  imports: [ButtonComponent],
  selector: 'app-test-button',
  standalone: true,
  template: ` <ngx-button>Hello World</ngx-button> `,
})
export class ButtonDemoComponent {}
