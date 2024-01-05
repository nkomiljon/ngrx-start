import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "./books-list.model";


@Component({
    selector: 'app-book-list',
    standalone: true,
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

    constructor() { }

    @Input() books: ReadonlyArray<Book> = [];
    @Output() add = new EventEmitter<string>();

}