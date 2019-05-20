import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthorViewModelItem } from '../../models/responses/GetAuthorListAuthorResponseViewModel';
import { AuthorService } from '../../services/author.service';
import { MessageService } from '../../services/message-service';
var AuthorDetailsComponent = /** @class */ (function () {
    function AuthorDetailsComponent(authorService, messageService) {
        this.authorService = authorService;
        this.messageService = messageService;
        this.removeAuthor = new EventEmitter();
    }
    AuthorDetailsComponent.prototype.sendMessage = function (message) {
        this.messageService.sendMessage(message);
        this.messageService.clearMessages();
    };
    Object.defineProperty(AuthorDetailsComponent.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (author) {
            var _this = this;
            this._author = author;
            if (!author) {
                return;
            }
            this.authorService.getAuthorDetails(author.id).subscribe(function (data) {
                _this.authorDetails = data;
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthorDetailsComponent.prototype.ngOnInit = function () {
    };
    AuthorDetailsComponent.prototype.deleteAuthor = function (id) {
        this.removeAuthor.emit(id);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", AuthorViewModelItem),
        tslib_1.__metadata("design:paramtypes", [AuthorViewModelItem])
    ], AuthorDetailsComponent.prototype, "author", null);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], AuthorDetailsComponent.prototype, "removeAuthor", void 0);
    AuthorDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-author-details',
            templateUrl: './author-details.component.html',
            styleUrls: ['./author-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthorService, MessageService])
    ], AuthorDetailsComponent);
    return AuthorDetailsComponent;
}());
export { AuthorDetailsComponent };
//# sourceMappingURL=author-details.component.js.map