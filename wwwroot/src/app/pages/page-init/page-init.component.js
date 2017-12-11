
import { Component } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

import { PagesService } from "../pages.service";


@Component({

    templateUrl: "./page-init.component.html",

    styleUrls: [ "../pages.component.css" ],

})
export class PageInitComponent {

    constructor(router: Router, route: ActivatedRoute, pagesService: PagesService) {

        this._router = router;

        this._route = route;

        this._pagesService = pagesService;

        this.page = { dateCreated: "08 December, 2017", title: "", text: "", };

    };

    ngOnInit() {

        this._route.params
        
            .subscribe(params => {

                this.page.bookId = +params["bookId"];

            });

    };

    CreatePage(page) {

        const { title, text, bookId } = page;

        const newPage = { title, text, bookId };

        if (!title) {

            return;

        };

        this._pagesService.AddBookPage(newPage)

            .subscribe(
                done => console.log(done),
                error => console.log(error)
            );

    };

    DiscardPageChanges(page) {

        this._router.navigate(["/books", page.bookId, "pages"]);

    };

};