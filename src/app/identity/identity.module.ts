import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityRoutingModule } from './identity-routing.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { IdentityService } from './services/identity.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { IdentityComponent } from './identity.component';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, IdentityComponent],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    SharedModule,
    NgSelectModule
  ],
  providers: [
    IdentityService,
    LocalStorageHelper,
  ]
})
export class IdentityModule { }
