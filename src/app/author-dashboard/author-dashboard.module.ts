import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDashboardRoutingModule } from './author-dashboard-routing.module';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorService } from './services/author.service';
import { AuthorDashboardComponent } from './author-dashboard.component';

@NgModule({
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
export class AuthorDashboardModule { }
