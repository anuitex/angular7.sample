import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './interceptors/http-universal.interceptor';
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    AppServerModule = tslib_1.__decorate([
        NgModule({
            imports: [
                AppModule,
                ServerModule,
                ModuleMapLoaderModule,
            ],
            providers: [{
                    provide: HTTP_INTERCEPTORS,
                    useClass: UniversalInterceptor,
                    multi: true
                }],
            bootstrap: [AppComponent],
        })
    ], AppServerModule);
    return AppServerModule;
}());
export { AppServerModule };
//# sourceMappingURL=app.server.module.js.map