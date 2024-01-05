import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../book-list/books-list.model";

@Component({
    selector: 'app-book-collection',
    standalone: true,
    templateUrl: './book-collection.component.html',
    styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent {
    @Input() books: ReadonlyArray<Book> = [];
    @Output() remove = new EventEmitter<string>();
}