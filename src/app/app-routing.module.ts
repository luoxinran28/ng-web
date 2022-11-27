import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './entrance/components/login/login.component';
import { RegisterComponent } from './entrance/components/register/register.component';

const routes: Routes = [
  {
    path: 'entrance',
    loadChildren: () =>
      import('./entrance/entrance.module').then((m) => m.EntranceModule),
  },
  {
    path: '**',
    redirectTo: 'entrance',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
