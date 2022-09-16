import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RootCssVariablesService {
  rootStyles: CSSStyleDeclaration;

  constructor() {
    this.rootStyles = getComputedStyle(document.documentElement);
  }

  getVariable(name: string) {
    return this.rootStyles.getPropertyValue(`--${name}`);
  }
}
