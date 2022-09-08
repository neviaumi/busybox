import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable()
export class SelectedNavBarItemService {
  private _selectedValue = '';

  constructor(private router: Router) {
    this.selectedValue = router.url;
    this.router.events
      .pipe(filter((e): e is NavigationStart => e instanceof NavigationStart))
      .subscribe((e: NavigationStart) => {
        this.selectedValue = e.url;
      });
  }

  set selectedValue(url: string) {
    this._selectedValue = new URL(url, window.location.origin).pathname;
  }

  get selectedValue() {
    return this._selectedValue;
  }
}
