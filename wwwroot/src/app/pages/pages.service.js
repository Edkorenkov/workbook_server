
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";


@Injectable()
export class PagesService {

    constructor(http: HttpClient) {

        this._http = http;

    };

    GetPageByOrder(bookId, pageOrder) {

        return this._http.get("/api/books/" + bookId + "/pages/" + pageOrder);

    };

    MapPage(page) {

        return {

            id: page.id,

            order: page.order,

            title: page.title,

            text: page.text,

            bookId: page.bookId,

        };

    };

    AddBookPage(page) {

        return this._http.post("/api/books/" + page.bookId + "/pages", page);
        
    };

    EditBookPage(page) {

        return this._http.put("/api/books/" + page.bookId + "/pages/" + page.order, page);

    };

    DownloadBookPage(page) {

        return this._http.get("/api/books/" + page.bookId + "/pages/" + page.order + "/download");


        // {

        //     responseType: ResponseContentType.Blob
        // })
        //     .map(response => new Blob([response.json()], { type: "application/x-msdownload" }));

    };

    DeleteBookPage(page) {

        return this._http.delete("/api/books/" + page.bookId + "/pages/" + page.order);

    };

};