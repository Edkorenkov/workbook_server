
import { Component } from '@angular/core';

import { ActivatedRoute } from "@angular/router";


import { BooksPagesService } from "./books-pages.service";


@Component({

    templateUrl: "./books-pages.component.html",

    styleUrls: [ "./books-pages.component.css" ],

})
export class BooksPagesComponent {

    constructor(route: ActivatedRoute, booksPagesService: BooksPagesService) {

        this._route = route;

        this._booksPagesService = booksPagesService;

        this.pages = [];  

    }

    ngOnInit() {

        this._route.params
        
            .switchMap(params => {

                this.pages = [];

                this.bookId = +params["bookId"];

                return this._booksPagesService.GetPagesByBookId(this.bookId);

            })

            .subscribe(pages => this.pages = pages);

	};

}
