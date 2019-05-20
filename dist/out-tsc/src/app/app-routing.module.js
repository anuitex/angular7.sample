import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map