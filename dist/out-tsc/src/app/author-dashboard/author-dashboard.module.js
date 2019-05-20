import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDashboardRoutingModule } from './author-dashboard-routing.module';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorService } from './services/author.service';
import { AuthorDashboardComponent } from './author-dashboard.component';
var AuthorDashboardModule = /** @class */ (function () {
    function AuthorDashboardModule() {
    }
    AuthorDashboardModule = tslib_1.__decorate([
        NgModule({
            declarations: [AuthorDetailsComponent, AuthorsComponent, AuthorDashboardComponent],
            imports: [
                CommonModule,
                AuthorDashboardRoutingModule,
                SharedModule
            ],
            providers: [
                AuthorService
            ]
        })
    ], AuthorDashboardModule);
    return AuthorDashboardModule;
}());
export { AuthorDashboardModule };
//# sourceMappingURL=author-dashboard.module.js.map