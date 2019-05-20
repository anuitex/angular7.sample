import * as tslib_1 from "tslib";
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
var IdentityModule = /** @class */ (function () {
    function IdentityModule() {
    }
    IdentityModule = tslib_1.__decorate([
        NgModule({
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
    ], IdentityModule);
    return IdentityModule;
}());
export { IdentityModule };
//# sourceMappingURL=identity.module.js.map