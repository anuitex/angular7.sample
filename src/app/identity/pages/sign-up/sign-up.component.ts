import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenderType } from '../../models/GenderType';
import { CreateAccountRequestViewModel } from '../../models/requests/CreateAccountRequestViewModel';
import { IdentityService } from '../../services/identity.service';
import { SelectItem } from '../../../models/SelectItem';
import { EnumHelper } from '../../../helpers/EnumHelper';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  genderItems: Array<SelectItem> = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private enumHelper: EnumHelper, private identityService: IdentityService) { }

  ngOnInit() {
    this.genderItems = this.enumHelper.mapToSelectItemArray(GenderType);

    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.compose([Validators.required, Validators.pattern("[^0]+")])],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    });
  }

  signUp() {

    if (this.signUpForm.invalid) {
      return;
    }

    const createAccountRequestViewModel = new CreateAccountRequestViewModel();

    createAccountRequestViewModel.firstName = this.signUpForm.controls['firstName'].value;
    createAccountRequestViewModel.lastName = this.signUpForm.controls['lastName'].value;
    createAccountRequestViewModel.email = this.signUpForm.controls['email'].value;
    createAccountRequestViewModel.gender = this.signUpForm.controls['gender'].value;
    createAccountRequestViewModel.password = this.signUpForm.controls['password'].value;
    createAccountRequestViewModel.passwordConfirmation = this.signUpForm.controls['passwordConfirmation'].value;

    this.identityService.signUp(createAccountRequestViewModel).subscribe(response => {
      this.router.navigate(['sign-in']);
    });
  }
}
