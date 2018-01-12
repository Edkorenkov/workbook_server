
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";


@Injectable()
export class BooksPagesService {

    constructor(http: HttpClient) {

        this._http = http;

    };

    GetPagesByBookId(bookId) {

        return this._http.get("/api/books/" + bookId + "/pages");

    };

};