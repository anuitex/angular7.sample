import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetAuthorResponseViewModel } from '../../models/responses/GetAuthorResponseViewModel';
import { AuthorViewModelItem } from '../../models/responses/GetAuthorListAuthorResponseViewModel';
import { AuthorService } from '../../services/author.service';
import { MessageService } from '../../services/message-service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  authorDetails: GetAuthorResponseViewModel;
  _author: AuthorViewModelItem;

  constructor(private authorService: AuthorService, private messageService: MessageService) { }

  sendMessage(message: string) {
    this.messageService.sendMessage(message);
    this.messageService.clearMessages();
  }

  @Input()

  set author(author: AuthorViewModelItem) {

    this._author = author;

    if (!author) {
      return;
    }

    this.authorService.getAuthorDetails(author.id).subscribe(data => {
      this.authorDetails = data;
    });
  }

  get author() {
    return this._author;
  }

  @Output() removeAuthor = new EventEmitter();


  ngOnInit() {
  }

  deleteAuthor(id: number) {
    this.removeAuthor.emit(id);
  }

}
