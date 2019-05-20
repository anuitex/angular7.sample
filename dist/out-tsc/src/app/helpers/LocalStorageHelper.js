import * as tslib_1 from "tslib";
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var LocalStorageHelper = /** @class */ (function () {
    function LocalStorageHelper(platformId) {
        this.platformId = platformId;
    }
    LocalStorageHelper.prototype.hasValue = function (key) {
        if (!isPlatformBrowser(this.platformId)) {
            return false;
        }
        var value = localStorage.getItem(key);
        if (!value) {
            return false;
        }
        return true;
    };
    LocalStorageHelper.prototype.removeItem = function (key) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        window.localStorage.removeItem(key);
    };
    LocalStorageHelper.prototype.setItem = function (key, value) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        window.localStorage.setItem(key, value);
    };
    LocalStorageHelper.prototype.getItem = function (key) {
        if (!isPlatformBrowser(this.platformId)) {
            return undefined;
        }
        return window.localStorage.getItem(key);
    };
    LocalStorageHelper = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__param(0, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], LocalStorageHelper);
    return LocalStorageHelper;
}());
export { LocalStorageHelper };
//# sourceMappingURL=LocalStorageHelper.js.map