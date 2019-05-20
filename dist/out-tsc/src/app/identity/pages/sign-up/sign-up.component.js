import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenderType } from '../../models/GenderType';
import { CreateAccountRequestViewModel } from '../../models/requests/CreateAccountRequestViewModel';
import { IdentityService } from '../../services/identity.service';
import { EnumHelper } from '../../../helpers/EnumHelper';
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router, formBuilder, enumHelper, identityService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.enumHelper = enumHelper;
        this.identityService = identityService;
        this.genderItems = [];
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.genderItems = this.enumHelper.mapToSelectItemArray(GenderType);
        this.createSignUpForm();
    };
    SignUpComponent.prototype.createSignUpForm = function () {
        this.signUpForm = this.formBuilder.group({
            firstName: ['', Validators.compose([Validators.required])],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            gender: ['', Validators.compose([Validators.required, Validators.pattern("[^0]+")])],
            password: ['', Validators.required],
            passwordConfirmation: ['', Validators.required],
        });
    };
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        if (this.signUpForm.invalid) {
            return;
        }
        var createAccountRequestViewModel = new CreateAccountRequestViewModel();
        createAccountRequestViewModel.firstName = this.signUpForm.controls['firstName'].value;
        createAccountRequestViewModel.lastName = this.signUpForm.controls['lastName'].value;
        createAccountRequestViewModel.email = this.signUpForm.controls['email'].value;
        createAccountRequestViewModel.gender = this.signUpForm.controls['gender'].value;
        createAccountRequestViewModel.password = this.signUpForm.controls['password'].value;
        createAccountRequestViewModel.passwordConfirmation = this.signUpForm.controls['passwordConfirmation'].value;
        this.identityService.signUp(createAccountRequestViewModel).subscribe(function (response) {
            _this.router.navigate(['sign-in']);
        });
    };
    SignUpComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, FormBuilder, EnumHelper, IdentityService])
    ], SignUpComponent);
    return SignUpComponent;
}());
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map