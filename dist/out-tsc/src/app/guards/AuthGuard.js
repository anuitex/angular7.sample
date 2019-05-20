import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(localStorageHelper, router) {
        this.localStorageHelper = localStorageHelper;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var isAuthorized = this.localStorageHelper.hasValue('token');
        if (!isAuthorized) {
            this.router.navigate(['identity/sign-in']);
        }
        return isAuthorized;
    };
    AuthGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [LocalStorageHelper, Router])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=AuthGuard.js.map