import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account-dashboard',
    pathMatch: 'full',
  },
  {
    path: 'identity',
    loadChildren: './identity/identity.module#IdentityModule',
  },
  {
    path: 'account-dashboard',
    loadChildren: './account-dashboard/account-dashboard.module#AccountDashboardModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'author-dashboard',
    loadChildren: './author-dashboard/author-dashboard.module#AuthorDashboardModule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
