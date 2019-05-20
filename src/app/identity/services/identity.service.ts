import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInAccountRequestViewModel } from '../models/requests/SignInAccountRequestViewModel';
import { Observable } from "rxjs/index";
import { SignInAccountResponseViewModel } from '../models/responses/SignInAccountResponseViewModel';
import { CreateAccountRequestViewModel } from '../models/requests/CreateAccountRequestViewModel';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  baseUrl: string = environment.baseUrl;
  controller: string = 'account';

  constructor(private http: HttpClient) { }

  signIn(signInAccountRequestViewModel: SignInAccountRequestViewModel): Observable<SignInAccountResponseViewModel> {
    return this.http.post<SignInAccountResponseViewModel>(`${this.baseUrl}/${this.controller}/sign-in`, signInAccountRequestViewModel);
  }

  signUp(createAccountRequestViewModel: CreateAccountRequestViewModel): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${this.controller}/create`, createAccountRequestViewModel);
  }
}
