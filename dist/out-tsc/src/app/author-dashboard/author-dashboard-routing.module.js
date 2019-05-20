import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorDashboardComponent } from './author-dashboard.component';
var routes = [
    {
        path: '',
        redirectTo: '/author-dashboard/authors',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AuthorDashboardComponent,
        children: [
            {
                path: 'authors',
                component: AuthorsComponent
            },
            {
                path: 'author/:id',
                component: AuthorDetailsComponent
            },
        ]
    }
];
var AuthorDashboardRoutingModule = /** @class */ (function () {
    function AuthorDashboardRoutingModule() {
    }
    AuthorDashboardRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AuthorDashboardRoutingModule);
    return AuthorDashboardRoutingModule;
}());
export { AuthorDashboardRoutingModule };
//# sourceMappingURL=author-dashboard-routing.module.js.map