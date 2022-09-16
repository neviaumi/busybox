import { Component } from '@angular/core';
import { ButtonComponent } from '@busybox/ngx-components';

@Component({
  imports: [ButtonComponent],
  selector: 'app-demo-button',
  standalone: true,
  template: `
    <ngx-button data-testid="demo" (click)="buttonClick()"
      >Hello World</ngx-button
    >
    <div>
      <h1>Click count</h1>
      <p>{{ clickCount }}</p>
    </div>
  `,
})
export class DemoButtonComponent {
  clickCount = 0;

  buttonClick() {
    this.clickCount += 1;
  }
}
