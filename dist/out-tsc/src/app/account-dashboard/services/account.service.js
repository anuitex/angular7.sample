import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.baseUrl = environment.baseUrl;
        this.controller = 'account';
    }
    AccountService.prototype.getAccount = function () {
        return this.http.get(this.baseUrl + "/" + this.controller);
    };
    AccountService.prototype.updateAccount = function (updateAccountRequestViewModel) {
        return this.http.post(this.baseUrl + "/" + this.controller + "/update", updateAccountRequestViewModel);
    };
    AccountService.prototype.deleteAccount = function () {
        return this.http.get(this.baseUrl + "/" + this.controller + "/delete");
    };
    AccountService.prototype.changePassword = function (changePasswordAccountRequestViewModel) {
        return this.http.post(this.baseUrl + "/" + this.controller + "/change-password", changePasswordAccountRequestViewModel);
    };
    AccountService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AccountService);
    return AccountService;
}());
export { AccountService };
//# sourceMappingURL=account.service.js.map