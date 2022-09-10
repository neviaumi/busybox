import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import type { Route } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
import { NavBarModule } from '@busybox/ngx-components';

@Component({
  imports: [RouterModule],
  selector: 'app-demo-nav-bar-content',
  standalone: true,
  styles: [],
  template: `
    <p>
      {{ url }}
    </p>
  `,
})
class DemoNavBarContentComponent {
  url = '';

  constructor(public router: Router) {
    this.url = router.url;
  }
}

export const ROUTES: Route[] = [
  { component: DemoNavBarContentComponent, path: 'tab1' },
  { component: DemoNavBarContentComponent, path: 'tab2' },
  { component: DemoNavBarContentComponent, path: 'tab3' },
  { path: '', pathMatch: 'full', redirectTo: 'tab1' },
];

@Component({
  imports: [CommonModule, NavBarModule, RouterModule],
  selector: 'app-demo-nav-bar',
  standalone: true,
  styles: [':host { width: 100%}'],
  template: `
    <ngx-nav-bar>
      <ngx-nav-item
        data-testid="demo-item1"
        class="tw-w-full tw-justify-center"
        value="/demo/nav-bar/tab1"
        >Tab1</ngx-nav-item
      >
      <ngx-nav-item
        data-testid="demo-item2"
        class="tw-w-full tw-justify-center"
        value="/demo/nav-bar/tab2"
        >Tab2</ngx-nav-item
      >
      <ngx-nav-item
        data-testid="demo-item3"
        class="tw-w-full tw-justify-center"
        value="/demo/nav-bar/tab3"
        >Tab3</ngx-nav-item
      >
    </ngx-nav-bar>
    <router-outlet></router-outlet>
  `,
})
export class DemoNavBarComponent {}
