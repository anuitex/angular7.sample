import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDashboardRoutingModule } from './account-dashboard-routing.module';
import { AccountComponent } from './pages/account/account.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AccountService } from './services/account.service';
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccountDashboardComponent } from './account-dashboard.component';
import { LoaderModule } from '../shared/loader/loader.module';
import { LoaderComponent } from '../shared/loader/loader.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AccountComponent, ChangePasswordComponent, AccountDashboardComponent, LoaderComponent],
  imports: [
    CommonModule,
    AccountDashboardRoutingModule,
    SharedModule,
    NgSelectModule,
    LoaderModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
  ],
  providers: [
    AccountService,
  ]
})
export class AccountDashboardModule { }
