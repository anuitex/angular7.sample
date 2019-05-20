import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { EnumHelper } from './helpers/EnumHelper';
import { LocalStorageHelper } from './helpers/LocalStorageHelper';
import { AuthGuard } from './guards/AuthGuard';
import { HttpConfigInterceptor } from './interceptors/http-config.interceptor';
import { AppRoutingModule } from './app-routing.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule.withServerTransition({ appId: 'serverApp' }),
                BrowserAnimationsModule,
                HttpClientModule,
                ToastrModule.forRoot(),
                CommonModule,
                AppRoutingModule
            ],
            providers: [
                EnumHelper,
                LocalStorageHelper,
                AuthGuard,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpConfigInterceptor,
                    multi: true
                }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map