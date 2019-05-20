import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { GenderType } from '../../models/GenderType';
import { Router } from '@angular/router';
import { UpdateAccountRequestViewModel } from '../../models/requests/UpdateAccountRequestViewModel';
import { EnumHelper } from '../../../helpers/EnumHelper';
import { SelectItem } from '../../../models/SelectItem';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  updateAccountForm: FormGroup;
  genderItems: Array<SelectItem> = [];
  isEditMode: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private enumHelper: EnumHelper, private accountService: AccountService) { }

  ngOnInit() {
    this.genderItems = this.enumHelper.mapToSelectItemArray(GenderType);
    this.createUpdateAccountForm();
    this.toggleEditMode();
    this.getAccount();
  }

  createUpdateAccountForm() {
    this.updateAccountForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.required],
      gender: ['', Validators.compose([Validators.required, Validators.pattern("[^0]+")])],
    });
  }

  getAccount() {
    this.accountService.getAccount().subscribe(account => {
      this.updateAccountForm.controls['firstName'].setValue(account.firstName);
      this.updateAccountForm.controls['lastName'].setValue(account.lastName);
      this.updateAccountForm.controls['gender'].setValue(account.gender);
    });
  }

  updateAccount() {
    const updateAccountRequestViewModel = new UpdateAccountRequestViewModel();

    updateAccountRequestViewModel.firstName = this.updateAccountForm.controls['firstName'].value;
    updateAccountRequestViewModel.lastName = this.updateAccountForm.controls['lastName'].value;
    updateAccountRequestViewModel.gender = this.updateAccountForm.controls['gender'].value;

    this.accountService.updateAccount(updateAccountRequestViewModel).subscribe(response => {
      this.toggleEditMode();
    });
  }

  deleteAccount() {
    this.accountService.deleteAccount().subscribe(model => {
      this.router.navigate(['identity/sign-in']);
    });
  }

  toggleEditMode() {
    if (this.isEditMode) {
      this.updateAccountForm.enable();
    }
    if (!this.isEditMode) {
      this.updateAccountForm.disable();
    }

    this.isEditMode = !this.isEditMode;
  }
}
