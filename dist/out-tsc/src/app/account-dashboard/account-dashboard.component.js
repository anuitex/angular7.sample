import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HubHelper } from '../helpers/HubHelper';
import { MediaHelper } from '../helpers/MediaHelper';
var AccountDashboardComponent = /** @class */ (function () {
    function AccountDashboardComponent(toastrService, hubHelper, mediaHelper) {
        this.toastrService = toastrService;
        this.hubHelper = hubHelper;
        this.mediaHelper = mediaHelper;
    }
    AccountDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hubConnection = this.hubHelper.getHubConnection('file-transfer');
        this.hubHelper.startHubConnection(this.hubConnection);
        this.hubConnection.on('file-transfer-progress', function (fileName, progress) {
            _this.fileName = fileName;
            _this.progress = progress;
            if (progress >= 98) {
                _this.resetProgress();
            }
        });
    };
    AccountDashboardComponent.prototype.processFile = function (imageInput) {
        var _this = this;
        this.resetProgress();
        this.mediaHelper.processFile(imageInput, function (fileName, chunk, contentLength) {
            _this.hubHelper.sendMessage(_this.hubConnection, 'ReceiveFileChunk', 'username1', fileName, chunk, contentLength);
        });
    };
    AccountDashboardComponent.prototype.resetProgress = function () {
        this.progress = 0;
        this.fileName = '';
    };
    AccountDashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-account-dashboard',
            templateUrl: './account-dashboard.component.html',
            styleUrls: ['./account-dashboard.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ToastrService, HubHelper, MediaHelper])
    ], AccountDashboardComponent);
    return AccountDashboardComponent;
}());
export { AccountDashboardComponent };
//# sourceMappingURL=account-dashboard.component.js.map