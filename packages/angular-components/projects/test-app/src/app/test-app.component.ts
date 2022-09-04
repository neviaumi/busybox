import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-test-root',
  standalone: true,
  template: `<main>
    <h1
      class="tw-mb-1 tw-block tw-border-b-2 tw-border-red-400 tw-bg-blue-100 tw-text-center tw-text-9xl tw-font-bold tw-text-gray-600"
    >
      TestBed
    </h1>
    <section class="tw-flex tw-justify-center">
      <router-outlet></router-outlet>
    </section>
  </main>`,
})
export class TestAppComponent {}
