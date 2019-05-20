import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { SignInAccountRequestViewModel } from '../../models/requests/SignInAccountRequestViewModel';
import { IdentityService } from '../../services/identity.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageHelper } from '../../../../app/helpers/LocalStorageHelper';
var SignInComponent = /** @class */ (function () {
    function SignInComponent(formBuilder, identityService, router, localStorageHelper) {
        this.formBuilder = formBuilder;
        this.identityService = identityService;
        this.router = router;
        this.localStorageHelper = localStorageHelper;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.localStorageHelper.removeItem('token');
        this.localStorageHelper.removeItem('refreshToken');
        this.createSignInForm();
    };
    SignInComponent.prototype.createSignInForm = function () {
        this.signInForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    };
    SignInComponent.prototype.signIn = function () {
        var _this = this;
        var signInAccountRequestViewModel = new SignInAccountRequestViewModel();
        signInAccountRequestViewModel.email = this.signInForm.controls['email'].value;
        signInAccountRequestViewModel.password = this.signInForm.controls['password'].value;
        this.identityService.signIn(signInAccountRequestViewModel).subscribe(function (response) {
            if (response instanceof HttpErrorResponse) {
                return;
            }
            _this.localStorageHelper.setItem('token', response.accessToken);
            _this.localStorageHelper.setItem('refreshToken', response.refreshToken);
            _this.router.navigate(['/account-dashboard/account']);
        });
    };
    SignInComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sign-in',
            templateUrl: './sign-in.component.html',
            styleUrls: ['./sign-in.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, IdentityService, Router, LocalStorageHelper])
    ], SignInComponent);
    return SignInComponent;
}());
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map