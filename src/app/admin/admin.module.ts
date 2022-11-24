import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from '../entrance/components/login/login.component';
import { RegisterComponent } from '../entrance/components/register/register.component';

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
