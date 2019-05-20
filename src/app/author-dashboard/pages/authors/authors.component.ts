import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorViewModelItem } from '../../models/responses/GetAuthorListAuthorResponseViewModel';
import { AuthorService } from '../../services/author.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../../services/message-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit, OnDestroy {

  authors: Array<AuthorViewModelItem>;
  selectedAuthor: AuthorViewModelItem;
  messageServiceSubscription: Subscription;

  constructor(private authorService: AuthorService, private messageService: MessageService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(response => {
      this.authors = response.authorList;
    });

    this.messageServiceSubscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        console.log(message);
      }
      else {
        console.log('cleared messages');
      }
    });
  }

  ngOnDestroy() {
    this.messageServiceSubscription.unsubscribe();
  }

  onSelect(author: AuthorViewModelItem) {
    this.selectedAuthor = author;
  }

  removeAuthor(id: number) {
    this.authorService.delete(id).subscribe(x => {
      if (x instanceof HttpErrorResponse) {
        return;
      }

      this.authors = this.authors.filter(function (item, index) {
        return item.id != id;
      });

      console.log(this.authors.length > 0);

      this.selectedAuthor = undefined;
    });
  }
}
