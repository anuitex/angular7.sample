import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { IdentityComponent } from './identity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/identity/sign-in',
    pathMatch: 'full'
  },
  {
    path: '',
    component: IdentityComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IdentityRoutingModule { }
