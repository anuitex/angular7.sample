import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var IdentityService = /** @class */ (function () {
    function IdentityService(http) {
        this.http = http;
        this.baseUrl = environment.baseUrl;
        this.controller = 'account';
    }
    IdentityService.prototype.signIn = function (signInAccountRequestViewModel) {
        return this.http.post(this.baseUrl + "/" + this.controller + "/sign-in", signInAccountRequestViewModel);
    };
    IdentityService.prototype.signUp = function (createAccountRequestViewModel) {
        return this.http.post(this.baseUrl + "/" + this.controller + "/create", createAccountRequestViewModel);
    };
    IdentityService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], IdentityService);
    return IdentityService;
}());
export { IdentityService };
//# sourceMappingURL=identity.service.js.map