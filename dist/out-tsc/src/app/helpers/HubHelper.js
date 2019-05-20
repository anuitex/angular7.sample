import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@aspnet/signalr';
import { environment } from '../../environments/environment';
var HubHelper = /** @class */ (function () {
    function HubHelper() {
    }
    HubHelper.prototype.getHubConnection = function (hubName) {
        var hubConnection = new HubConnectionBuilder()
            .withUrl(environment.domain + "/" + hubName)
            .build();
        this.hubName = hubName;
        return hubConnection;
    };
    HubHelper.prototype.startHubConnection = function (hubConnection) {
        var _this = this;
        hubConnection
            .start()
            .then(function () { return console.log(_this.hubName + " hub connection established"); })
            .catch(function (err) { return console.log("Error while establishing " + _this.hubName + " hub connection.\n" + err); });
    };
    HubHelper.prototype.sendMessage = function (hubConnection, methodName) {
        var _this = this;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        hubConnection
            .invoke.apply(hubConnection, [methodName].concat(args)).then()
            .catch(function (err) { return "Error while invoking " + methodName + " method on " + _this.hubName + " hub connection.\n" + err; });
    };
    HubHelper = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        })
    ], HubHelper);
    return HubHelper;
}());
export { HubHelper };
//# sourceMappingURL=HubHelper.js.map