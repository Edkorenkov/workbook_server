
import { Component } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

import { PagesService } from "../pages.service";


@Component({

    templateUrl: "./page-created.component.html",

    styleUrls: [ "../pages.component.css" ],

})
export class PageCreatedComponent {

    constructor(router: Router, route: ActivatedRoute, pagesService: PagesService) {

        this._router = router;

        this._route = route;

        this._pagesService = pagesService;

        this.page = { title: "", text: "", dateCreated: null };

    };

    ngOnInit() {

        this._route.params
        
            .subscribe(params => {

                this._pagesService.GetPageById(+params["bookId"], +params["pageId"])

                    .subscribe(
                        page => this.page = page,
                        error => console.log(error)
                    );

            });

    };

    EditPage(page) {

        const { id, title, text, bookId } = page;

        const newPage = { id, title, text, bookId };

        if (!title) {

            return;

        };

        this._pagesService.EditBookPage(newPage)

            .subscribe(
                done => console.log(done),
                error => console.log(error)
            );

    };

    DeletePage(page) {

        this._pagesService.DeleteBookPage(page)

            .subscribe(
                done => {

                    console.log(done);

                    this._router.navigate(["/books", page.bookId, "pages"]);

                },
                error => console.log(error)
            );

    };

};