

export interface IndexBook {
  books: Book[];
}

export interface GetBook{
  book:Book;
}

export interface Book {
  id:              number;
  title:           string;
  pageNumber:      number;
  description:     string;
  datePublication: Date;
  dateCreation:    Date;
  codeReference:   string;
  author:          Author;
  genero:          Genero;
}

export interface Author {
  id:          number;
  name:        string;
  nationality: string;
  birthdate:   Date;
}

export interface Genero {
  id:   number;
  name: string;
}