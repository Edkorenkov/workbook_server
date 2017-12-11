
import { Injectable } from "@angular/core";

import { Http } from "@angular/http";


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

    constructor(http: Http) {

        this._http = http;

    };
  
    GetBooks() {

        return this._http.get("/api/books")

            .map(response => MapBooks(response.json()))

    };

    CreateBook(book) {

        return this._http.post("/api/books", book)

            .map(response => response.json());

    };

    RemoveBook(bookId) {

        return this._http.delete("/api/books/" + bookId)

            .map(response => response.json());

    };

};