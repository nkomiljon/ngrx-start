import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from "./book-list/book-list.component";
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { GoogleBooksService } from './book-list/books.service';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { BookCollectionComponent } from "./book-collection/book-collection.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, BookListComponent, BookCollectionComponent]
})
export class AppComponent implements OnInit {
  
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  
  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }))
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store) { }
  
  ngOnInit() {
    this.booksService.getBooks()
      .subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

}
