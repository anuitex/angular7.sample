import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { GetAccountResponseViewModel } from '../models/responses/GetAccountResponseViewModel';
import { UpdateAccountRequestViewModel } from '../models/requests/UpdateAccountRequestViewModel';
import { ChangePasswordAccountRequestViewModel } from '../models/requests/ChangePasswordAccountRequestViewModel';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }


  baseUrl: string = environment.baseUrl;
  controller: string = 'account';

  getAccount(): Observable<GetAccountResponseViewModel> {
    return this.http.get<GetAccountResponseViewModel>(`${this.baseUrl}/${this.controller}`);
  }

  updateAccount(updateAccountRequestViewModel: UpdateAccountRequestViewModel): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${this.controller}/update`, updateAccountRequestViewModel);
  }

  deleteAccount(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${this.controller}/delete`);
  }

  changePassword(changePasswordAccountRequestViewModel: ChangePasswordAccountRequestViewModel): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${this.controller}/change-password`, changePasswordAccountRequestViewModel)
  }
}
