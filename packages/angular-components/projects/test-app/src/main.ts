import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DemoButtonComponent } from './app/demo-button/demo-button.component';
import { DemoFileUploadComponent } from './app/demo-file-upload/demo-file-upload.component';
import { DemoNavBarComponent } from './app/demo-nav-bar/demo-nav-bar.component';
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
        {
          component: DemoNavBarComponent,
          loadChildren: () =>
            import('./app/demo-nav-bar/demo-nav-bar.component').then(
              mod => mod.ROUTES,
            ),
          path: 'demo/nav-bar',
        },
        {
          component: DemoFileUploadComponent,
          path: 'demo/file-upload',
        },
      ]),
    ),
  ],
});
