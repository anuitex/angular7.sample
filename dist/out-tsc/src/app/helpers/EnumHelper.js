import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var EnumHelper = /** @class */ (function () {
    function EnumHelper() {
    }
    EnumHelper.prototype.mapToSelectItemArray = function (emum) {
        var keys = Object.keys(emum);
        var halfLength = keys.length / 2;
        var result = [];
        for (var i = 0; i < halfLength; i++) {
            result.push({
                id: +keys[i],
                title: keys[halfLength + i]
            });
        }
        return result;
    };
    EnumHelper = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        })
    ], EnumHelper);
    return EnumHelper;
}());
export { EnumHelper };
//# sourceMappingURL=EnumHelper.js.map