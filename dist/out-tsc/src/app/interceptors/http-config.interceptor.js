import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { RefreshTokenAccountRequestViewModel } from '../models/requests/RefreshTokenAccountRequestViewModel';
import { environment } from '../../environments/environment';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';
var HttpConfigInterceptor = /** @class */ (function () {
    function HttpConfigInterceptor(toastrService, http, localStorageHelper) {
        this.toastrService = toastrService;
        this.http = http;
        this.localStorageHelper = localStorageHelper;
    }
    HttpConfigInterceptor.prototype.setRequestHeaders = function (request) {
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', "Bearer " + token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        request = request.clone({ headers: request.headers.set('Access-Control-Allow-Credentials', 'false') });
        return request;
    };
    HttpConfigInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        request = this.setRequestHeaders(request);
        return next.handle(request).pipe(map(function (event) {
            if (event instanceof HttpResponse) {
                console.log('event--->>>', event);
            }
            return event;
        }), catchError(function (error) {
            if (error.status === 401) {
                return _this.refreshToken().pipe(flatMap(function (data) {
                    _this.localStorageHelper.setItem('token', data.accessToken);
                    _this.localStorageHelper.setItem('refreshToken', data.refreshToken);
                    request = _this.setRequestHeaders(request);
                    return next.handle(request);
                }));
            }
            else {
                _this.toastrService.error("" + error.error);
                return throwError(error);
            }
        }));
    };
    HttpConfigInterceptor.prototype.refreshToken = function () {
        var refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            return new Observable();
        }
        this.localStorageHelper.removeItem('token');
        this.localStorageHelper.removeItem('refreshToken');
        var refreshTokenAccountRequestViewModel = new RefreshTokenAccountRequestViewModel();
        refreshTokenAccountRequestViewModel.refreshToken = refreshToken;
        return this.http.post(environment.refreshTokenUrl, refreshTokenAccountRequestViewModel);
    };
    HttpConfigInterceptor = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [ToastrService, HttpClient, LocalStorageHelper])
    ], HttpConfigInterceptor);
    return HttpConfigInterceptor;
}());
export { HttpConfigInterceptor };
//# sourceMappingURL=http-config.interceptor.js.map