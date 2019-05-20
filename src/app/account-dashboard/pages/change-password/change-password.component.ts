import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangePasswordAccountRequestViewModel } from '../../models/requests/ChangePasswordAccountRequestViewModel';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.createChangePasswordForm();
  }

  createChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  changePassword() {
    const changePasswordAccountRequestViewModel = new ChangePasswordAccountRequestViewModel();

    changePasswordAccountRequestViewModel.currentPassword = this.changePasswordForm.controls['currentPassword'].value;
    changePasswordAccountRequestViewModel.newPassword = this.changePasswordForm.controls['newPassword'].value;

    this.accountService.changePassword(changePasswordAccountRequestViewModel).subscribe(response => {
      this.router.navigate(['account-dashboard/account']);
    });
  }
}
