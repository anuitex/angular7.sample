import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new Subject();
    }
    MessageService.prototype.sendMessage = function (message) {
        this.subject.next(message);
    };
    MessageService.prototype.clearMessages = function () {
        this.subject.next();
    };
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService = tslib_1.__decorate([
        Injectable({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());
export { MessageService };
//# sourceMappingURL=message-service.js.map