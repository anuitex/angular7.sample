import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { IdentityComponent } from './identity.component';
var routes = [
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
var IdentityRoutingModule = /** @class */ (function () {
    function IdentityRoutingModule() {
    }
    IdentityRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], IdentityRoutingModule);
    return IdentityRoutingModule;
}());
export { IdentityRoutingModule };
//# sourceMappingURL=identity-routing.module.js.map