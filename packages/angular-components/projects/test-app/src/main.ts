import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DemoButtonComponent } from './app/demo-button/demo-button.component';
import { TestAppComponent } from './app/test-app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(TestAppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { component: DemoButtonComponent, path: 'demo/button' },
      ]),
    ),
  ],
});
