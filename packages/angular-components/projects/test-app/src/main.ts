import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ButtonDemoComponent } from './app/button-demo.component';
import { TestAppComponent } from './app/test-app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(TestAppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { component: ButtonDemoComponent, path: 'demo/button' },
      ]),
    ),
  ],
});
