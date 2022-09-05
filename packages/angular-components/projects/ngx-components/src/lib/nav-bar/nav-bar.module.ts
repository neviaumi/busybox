import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
import { NavItemComponent } from './nav-item.component';
import { SelectedNavBarItemService } from './selected-nav-bar-item.service';

@NgModule({
  declarations: [NavBarComponent, NavItemComponent],
  exports: [NavBarComponent, NavItemComponent],
  imports: [CommonModule, RouterModule],
  providers: [SelectedNavBarItemService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavBarModule {}

export { NavBarComponent, NavItemComponent };
