import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';
var LoaderModule = /** @class */ (function () {
    function LoaderModule() {
    }
    LoaderModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                NgCircleProgressModule.forRoot({
                    radius: 100,
                    outerStrokeWidth: 16,
                    innerStrokeWidth: 8,
                    outerStrokeColor: "#78C000",
                    innerStrokeColor: "#C7E596",
                    animationDuration: 300,
                }),
            ]
        })
    ], LoaderModule);
    return LoaderModule;
}());
export { LoaderModule };
//# sourceMappingURL=loader.module.js.map