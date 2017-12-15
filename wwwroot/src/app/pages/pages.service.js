
import { Injectable } from "@angular/core";

import { Http } from "@angular/http";


@Injectable()
export class PagesService {

    constructor(http: Http) {

        this._http = http;

    };

    GetPageById(bookId, pageId) {

        return this._http.get("/api/books/" + bookId + "/pages/" + pageId)

            .map(response => response.json());

    };

    MapPage(page) {

        const { id, title, text, bookId } = page;
        
        return { id, title, text, bookId };

    };

    AddBookPage(page) {

        return this._http.post("/api/books/" + page.bookId + "/pages", page)

            .map(response => response.json());
        
    };

    EditBookPage(page) {

        return this._http.put("/api/books/" + page.bookId + "/pages/" + page.id, page)

            .map(response => response.json());

    };

    DeleteBookPage(page) {

        return this._http.delete("/api/books/" + page.bookId + "/pages/" + page.id)

            .map(response => response.json());

    };

};