import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from '../entrance/login-bp/login.component';
import { RegisterComponent } from '../entrance/register-bp/register.component';

@NgModule({
  declarations: [OverviewComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
