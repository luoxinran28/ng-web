import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login-bp/login.component';
import { OverviewComponent } from './overview/overview.component';
import { RegisterComponent } from '../components/register-bp/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
