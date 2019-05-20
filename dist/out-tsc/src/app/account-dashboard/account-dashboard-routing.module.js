import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { AccountDashboardComponent } from './account-dashboard.component';
var routes = [
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
var AccountDashboardRoutingModule = /** @class */ (function () {
    function AccountDashboardRoutingModule() {
    }
    AccountDashboardRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AccountDashboardRoutingModule);
    return AccountDashboardRoutingModule;
}());
export { AccountDashboardRoutingModule };
//# sourceMappingURL=account-dashboard-routing.module.js.map