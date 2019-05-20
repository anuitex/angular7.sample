import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { GenderType } from '../../models/GenderType';
import { Router } from '@angular/router';
import { UpdateAccountRequestViewModel } from '../../models/requests/UpdateAccountRequestViewModel';
import { EnumHelper } from '../../../helpers/EnumHelper';
var AccountComponent = /** @class */ (function () {
    function AccountComponent(router, formBuilder, enumHelper, accountService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.enumHelper = enumHelper;
        this.accountService = accountService;
        this.genderItems = [];
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.genderItems = this.enumHelper.mapToSelectItemArray(GenderType);
        this.createUpdateAccountForm();
        this.toggleEditMode();
        this.getAccount();
    };
    AccountComponent.prototype.createUpdateAccountForm = function () {
        this.updateAccountForm = this.formBuilder.group({
            firstName: ['', Validators.compose([Validators.required])],
            lastName: ['', Validators.required],
            gender: ['', Validators.compose([Validators.required, Validators.pattern("[^0]+")])],
        });
    };
    AccountComponent.prototype.getAccount = function () {
        var _this = this;
        this.accountService.getAccount().subscribe(function (account) {
            _this.updateAccountForm.controls['firstName'].setValue(account.firstName);
            _this.updateAccountForm.controls['lastName'].setValue(account.lastName);
            _this.updateAccountForm.controls['gender'].setValue(account.gender);
        });
    };
    AccountComponent.prototype.updateAccount = function () {
        var _this = this;
        var updateAccountRequestViewModel = new UpdateAccountRequestViewModel();
        updateAccountRequestViewModel.firstName = this.updateAccountForm.controls['firstName'].value;
        updateAccountRequestViewModel.lastName = this.updateAccountForm.controls['lastName'].value;
        updateAccountRequestViewModel.gender = this.updateAccountForm.controls['gender'].value;
        this.accountService.updateAccount(updateAccountRequestViewModel).subscribe(function (response) {
            _this.toggleEditMode();
        });
    };
    AccountComponent.prototype.deleteAccount = function () {
        var _this = this;
        this.accountService.deleteAccount().subscribe(function (model) {
            _this.router.navigate(['identity/sign-in']);
        });
    };
    AccountComponent.prototype.toggleEditMode = function () {
        if (this.isEditMode) {
            this.updateAccountForm.enable();
        }
        if (!this.isEditMode) {
            this.updateAccountForm.disable();
        }
        this.isEditMode = !this.isEditMode;
    };
    AccountComponent = tslib_1.__decorate([
        Component({
            selector: 'app-account',
            templateUrl: './account.component.html',
            styleUrls: ['./account.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, FormBuilder, EnumHelper, AccountService])
    ], AccountComponent);
    return AccountComponent;
}());
export { AccountComponent };
//# sourceMappingURL=account.component.js.map