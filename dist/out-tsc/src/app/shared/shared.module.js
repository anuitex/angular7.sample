import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizedToolbarComponent } from './authorized-toolbar/authorized-toolbar.component';
import { UnauthorizedToolbarComponent } from './unauthorized-toolbar/unauthorized-toolbar.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatToolbarModule,
                RouterModule,
            ],
            exports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                AuthorizedToolbarComponent,
                UnauthorizedToolbarComponent,
                RouterModule,
                MatToolbarModule
            ],
            declarations: [AuthorizedToolbarComponent, UnauthorizedToolbarComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map