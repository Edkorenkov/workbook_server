
import { Injectable } from "@angular/core";

import { Http } from "@angular/http";


@Injectable()
export class BooksPagesService {

    constructor(http: Http) {

        this._http = http;

    };

    GetPagesByBookId(bookId) {

        return this._http.get("/api/books/" + bookId + "/pages")

            .map(response => response.json());

    };

};