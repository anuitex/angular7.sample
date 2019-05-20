import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LoaderComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LoaderComponent.prototype, "isVisible", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LoaderComponent.prototype, "progress", void 0);
    LoaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-loader',
            templateUrl: './loader.component.html',
            styleUrls: ['./loader.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());
export { LoaderComponent };
//# sourceMappingURL=loader.component.js.map