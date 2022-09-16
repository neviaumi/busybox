import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent, Variant } from '@busybox/ngx-components';

@Component({
  imports: [RouterModule, CardComponent],
  selector: 'app-test-root',
  standalone: true,
  template: `<main>
    <ngx-card class="tw-mb-1 tw-block tw-w-full" [variant]="Variant.Warning">
      <h1
        class="tw-text-center tw-text-9xl tw-font-bold tw-text-warning-main-text hover:tw-text-warning-hover-text"
      >
        TestBed
      </h1>
    </ngx-card>
    <section class="tw-flex tw-justify-center">
      <router-outlet></router-outlet>
    </section>
  </main>`,
})
export class TestAppComponent {
  Variant = Variant;
}
