import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var MediaHelper = /** @class */ (function () {
    function MediaHelper() {
        this.BASE64_MARKER = ';base64,';
        this.chunkSize = 2048;
    }
    MediaHelper.prototype.processFile = function (mediaInput, callback) {
        var _this = this;
        var filesCount = mediaInput.files.length;
        var _loop_1 = function (i) {
            var reader = new FileReader();
            reader.addEventListener('load', function (event) {
                var byte64 = event.target.result;
                var binaryArray = _this.convertDataURIToBinary(byte64);
                var chunkArray = _this.getChunkedArray(binaryArray, _this.chunkSize);
                chunkArray.forEach(function (chunk) {
                    callback(mediaInput.files[i].name, chunk, binaryArray.length);
                });
            });
            reader.readAsDataURL(mediaInput.files[i]);
        };
        for (var i = 0; i < filesCount; i++) {
            _loop_1(i);
        }
    };
    MediaHelper.prototype.convertDataURIToBinary = function (dataURI) {
        var base64Index = dataURI.indexOf(this.BASE64_MARKER) + this.BASE64_MARKER.length;
        var base64String = dataURI.substring(base64Index);
        var raw = window.atob(base64String);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        var result = Array.from(array);
        return result;
    };
    MediaHelper.prototype.getChunkedArray = function (array, chunkSize) {
        var result = [];
        for (var i = 0, len = array.length; i < len; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };
    MediaHelper = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        })
    ], MediaHelper);
    return MediaHelper;
}());
export { MediaHelper };
//# sourceMappingURL=MediaHelper.js.map