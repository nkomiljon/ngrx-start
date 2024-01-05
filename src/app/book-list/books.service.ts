import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Book } from "./books-list.model";


@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
    
    private url = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';

    constructor(private http: HttpClient) { }
    
    getBooks(): Observable<Array<Book>> {
        return this.http.get<{ items: Book[] }>(this.url)
        .pipe(map(books => books.items || []))
    }
}