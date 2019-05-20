import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private localStorageHelper: LocalStorageHelper, private router: Router) { }

  canActivate() {
    const isAuthorized = this.localStorageHelper.hasValue('token');

    if (!isAuthorized) {
      this.router.navigate(['identity/sign-in']);
    }

    return isAuthorized;
  }
}
