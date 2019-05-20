import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var AuthorService = /** @class */ (function () {
    function AuthorService(http) {
        this.http = http;
        this.baseUrl = environment.baseUrl;
        this.controller = 'author';
    }
    AuthorService.prototype.getAuthorDetails = function (id) {
        return this.http.get(this.baseUrl + "/" + this.controller + "/" + id);
    };
    AuthorService.prototype.getAuthors = function () {
        return this.http.get(this.baseUrl + "/" + this.controller + "/get-author-list");
    };
    AuthorService.prototype.delete = function (id) {
        return this.http.get(this.baseUrl + "/" + this.controller + "/delete/" + id);
    };
    AuthorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthorService);
    return AuthorService;
}());
export { AuthorService };
//# sourceMappingURL=author.service.js.map