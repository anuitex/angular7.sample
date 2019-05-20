import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { GetAuthorResponseViewModel } from '../models/responses/GetAuthorResponseViewModel';
import { GetAuthorListAuthorResponseViewModel } from '../models/responses/GetAuthorListAuthorResponseViewModel';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.baseUrl;
  controller: string = 'author';


  getAuthorDetails(id: number): Observable<GetAuthorResponseViewModel> {
    return this.http.get<GetAuthorResponseViewModel>(`${this.baseUrl}/${this.controller}/${id}`);
  }

  getAuthors(): Observable<GetAuthorListAuthorResponseViewModel> {
    return this.http.get<GetAuthorListAuthorResponseViewModel>(`${this.baseUrl}/${this.controller}/get-author-list`);
  }

  delete(id: number) {
    return this.http.get(`${this.baseUrl}/${this.controller}/delete/${id}`);
  }
}
