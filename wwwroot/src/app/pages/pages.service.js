
import { Injectable } from "@angular/core";

import { Http, ResponseContentType } from "@angular/http";


@Injectable()
export class PagesService {

    constructor(http: Http) {

        this._http = http;

    };

    GetPageByOrder(bookId, pageOrder) {

        return this._http.get("/api/books/" + bookId + "/pages/" + pageOrder)

            .map(response => response.json());

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

        return this._http.post("/api/books/" + page.bookId + "/pages", page)

            .map(response => response.json());
        
    };

    EditBookPage(page) {

        return this._http.put("/api/books/" + page.bookId + "/pages/" + page.order, page)

            .map(response => response.json());

    };

    DownloadBookPage(page) {

        return this._http.get("/api/books/" + page.bookId + "/pages/" + page.order + "/download")

            .map(response => response.json());


        // {

        //     responseType: ResponseContentType.Blob
        // })
        //     .map(response => new Blob([response.json()], { type: "application/x-msdownload" }));

    };

    DeleteBookPage(page) {

        return this._http.delete("/api/books/" + page.bookId + "/pages/" + page.order)

            .map(response => response.json());

    };

};