import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../../services/message-service';
var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(authorService, messageService) {
        this.authorService = authorService;
        this.messageService = messageService;
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAuthors().subscribe(function (response) {
            _this.authors = response.authorList;
        });
        this.messageServiceSubscription = this.messageService.getMessage().subscribe(function (message) {
            if (message) {
                console.log(message);
            }
            else {
                console.log('cleared messages');
            }
        });
    };
    AuthorsComponent.prototype.ngOnDestroy = function () {
        this.messageServiceSubscription.unsubscribe();
    };
    AuthorsComponent.prototype.onSelect = function (author) {
        this.selectedAuthor = author;
    };
    AuthorsComponent.prototype.removeAuthor = function (id) {
        var _this = this;
        this.authorService.delete(id).subscribe(function (x) {
            if (x instanceof HttpErrorResponse) {
                return;
            }
            _this.authors = _this.authors.filter(function (item, index) {
                return item.id != id;
            });
            console.log(_this.authors.length > 0);
            _this.selectedAuthor = undefined;
        });
    };
    AuthorsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-authors',
            templateUrl: './authors.component.html',
            styleUrls: ['./authors.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthorService, MessageService])
    ], AuthorsComponent);
    return AuthorsComponent;
}());
export { AuthorsComponent };
//# sourceMappingURL=authors.component.js.map