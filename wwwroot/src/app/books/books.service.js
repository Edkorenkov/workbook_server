
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";


import "rxjs/add/operator/map";


const MapBooks = books => {

    return books.map(book => ({

        id: book.id,

        title: book.title,

        dateCreated: book.dateCreated,

        isSelected: false,

    }));

};


@Injectable()
export class BooksService {

    constructor(http: HttpClient) {

        this._http = http;

    };
  
    GetBooks() {

        return this._http.get("/api/books")

            .map(books => MapBooks(books))

    };

    CreateBook(book) {

        return this._http.post("/api/books", book);

    };

    RemoveBook(bookId) {

        return this._http.delete("/api/books/" + bookId);

    };

};