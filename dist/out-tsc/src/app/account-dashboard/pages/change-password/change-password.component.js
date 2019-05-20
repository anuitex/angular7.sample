import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordAccountRequestViewModel } from '../../models/requests/ChangePasswordAccountRequestViewModel';
import { AccountService } from '../../services/account.service';
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, router, accountService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.accountService = accountService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.createChangePasswordForm();
    };
    ChangePasswordComponent.prototype.createChangePasswordForm = function () {
        this.changePasswordForm = this.formBuilder.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.required]
        });
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        var changePasswordAccountRequestViewModel = new ChangePasswordAccountRequestViewModel();
        changePasswordAccountRequestViewModel.currentPassword = this.changePasswordForm.controls['currentPassword'].value;
        changePasswordAccountRequestViewModel.newPassword = this.changePasswordForm.controls['newPassword'].value;
        this.accountService.changePassword(changePasswordAccountRequestViewModel).subscribe(function (response) {
            _this.router.navigate(['account-dashboard/account']);
        });
    };
    ChangePasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Router, AccountService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
//# sourceMappingURL=change-password.component.js.map