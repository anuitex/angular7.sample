import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignInAccountRequestViewModel } from '../../models/requests/SignInAccountRequestViewModel';
import { IdentityService } from '../../services/identity.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageHelper } from '../../../../app/helpers/LocalStorageHelper';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private identityService: IdentityService, private router: Router, private localStorageHelper: LocalStorageHelper) { }

  ngOnInit() {
    this.localStorageHelper.removeItem('token');
    this.localStorageHelper.removeItem('refreshToken');
    this.createSignInForm();
  }

  createSignInForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    const signInAccountRequestViewModel = new SignInAccountRequestViewModel();

    signInAccountRequestViewModel.email = this.signInForm.controls['email'].value;
    signInAccountRequestViewModel.password = this.signInForm.controls['password'].value;

    this.identityService.signIn(signInAccountRequestViewModel).subscribe(response => {
      if (response instanceof HttpErrorResponse) {
        return;
      }

      this.localStorageHelper.setItem('token', response.accessToken);
      this.localStorageHelper.setItem('refreshToken', response.refreshToken);

      this.router.navigate(['/account-dashboard/account']);
    });
  }
}
