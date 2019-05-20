import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AccountDashboardComponent } from './account-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/account-dashboard/account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AccountDashboardComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountDashboardRoutingModule { }
