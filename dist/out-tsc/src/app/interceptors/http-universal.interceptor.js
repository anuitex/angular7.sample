import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional } from '@angular/core';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';
var UniversalInterceptor = /** @class */ (function () {
    function UniversalInterceptor(request) {
        this.request = request;
    }
    UniversalInterceptor.prototype.intercept = function (req, next) {
        var serverReq = req;
        if (this.request) {
            var newUrl = this.request.protocol + "://" + this.request.get('host');
            if (!req.url.startsWith('/')) {
                newUrl += '/';
            }
            newUrl += req.url;
            serverReq = req.clone({ url: newUrl });
        }
        console.log(serverReq);
        return next.handle(serverReq);
    };
    var _a;
    UniversalInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, Inject(REQUEST)),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Request !== "undefined" && Request) === "function" ? _a : Object])
    ], UniversalInterceptor);
    return UniversalInterceptor;
}());
export { UniversalInterceptor };
//# sourceMappingURL=http-universal.interceptor.js.map