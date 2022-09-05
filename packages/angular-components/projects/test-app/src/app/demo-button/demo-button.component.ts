import { Component } from '@angular/core';
import { ButtonComponent } from '@busybox/ngx-components';

@Component({
  imports: [ButtonComponent],
  selector: 'app-demo-button',
  standalone: true,
  template: ` <ngx-button data-testid="demo">Hello World</ngx-button> `,
})
export class DemoButtonComponent {}
