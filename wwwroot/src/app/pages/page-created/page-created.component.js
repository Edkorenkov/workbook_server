
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

                this._pagesService.GetPageByOrder(+params["bookId"], +params["pageOrder"])

                    .subscribe(
                        page => this.page = page,
                        error => console.log(error)
                    );

            });

    };

    PrevPage(currentPage) {

        this._pagesService.GetPageByOrder(currentPage.bookId, currentPage.order - 1)

            .subscribe(
                page => {

                    this._router.navigate(["/books", page.bookId, "pages", page.order]);

                },
                error => console.log(error)
            );

    };

    NextPage(currentPage) {

        this._pagesService.GetPageByOrder(currentPage.bookId, currentPage.order + 1)

            .subscribe(
                page => {

                    this._router.navigate(["/books", page.bookId, "pages", page.order]);

                },
                error => console.log(error)
            );

    };

    EditPage(page) {

        const newPage = this._pagesService.MapPage(page);

        if (!newPage.title) {

            return;

        };

        this._pagesService.EditBookPage(newPage)

            .subscribe(
                done => console.log(done),
                error => console.log(error)
            );

    };

    ClonePage(page) {

        const newPage = this._pagesService.MapPage(page);

        if (!newPage.title) {

            return;

        };

        this._pagesService.AddBookPage(newPage)

            .subscribe(
                createdPage => {

                    console.log(createdPage);

                    this._router.navigate(["/books", createdPage.bookId, "pages", createdPage.order]);

                },
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