import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { RefreshTokenAccountResponseViewModel } from '../models/responses/RefreshTokenAccountResponseViewModel';
import { RefreshTokenAccountRequestViewModel } from '../models/requests/RefreshTokenAccountRequestViewModel';
import { environment } from '../../environments/environment';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';


@Injectable({
  providedIn: 'root',
})
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private toastrService: ToastrService, private http: HttpClient, private localStorageHelper: LocalStorageHelper) {

  }

  setRequestHeaders(request: HttpRequest<any>): HttpRequest<any> {

    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    request = request.clone({ headers: request.headers.set('Access-Control-Allow-Credentials', 'false') });

    return request;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = this.setRequestHeaders(request);

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {

          return this.refreshToken().pipe(

            flatMap(data => {

              this.localStorageHelper.setItem('token', data.accessToken);
              this.localStorageHelper.setItem('refreshToken', data.refreshToken);

              request = this.setRequestHeaders(request);

              return next.handle(request);
            }),
          );
        }
        else {
          this.toastrService.error(`${error.error}`);
          return throwError(error);
        }
      }));
  }

  refreshToken(): Observable<RefreshTokenAccountResponseViewModel> {

    const refreshToken: string = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      return new Observable<RefreshTokenAccountResponseViewModel>();
    }

    this.localStorageHelper.removeItem('token');
    this.localStorageHelper.removeItem('refreshToken');

    var refreshTokenAccountRequestViewModel = new RefreshTokenAccountRequestViewModel();
    refreshTokenAccountRequestViewModel.refreshToken = refreshToken;

    return this.http.post<RefreshTokenAccountResponseViewModel>(environment.refreshTokenUrl, refreshTokenAccountRequestViewModel);
  }
}
