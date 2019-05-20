import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './pages/authors/authors.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorDashboardComponent } from './author-dashboard.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorDashboardRoutingModule { }
