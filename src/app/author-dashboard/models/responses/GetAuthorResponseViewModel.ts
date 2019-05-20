export class GetAuthorResponseViewModel {
  id: number;
  firstName: string;
  lastName: string;
  books: Array<BookViewModelItem>;
}

class BookViewModelItem {
  id: number;
  title: string;
  publicationYear: number;
  genres: Array<GenreViewModelItem>;
}

class GenreViewModelItem {
  id: number;
  title: string;
}
