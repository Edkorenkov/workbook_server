
import { Component, Output, EventEmitter } from '@angular/core';



@Component({

	selector: "books-search",

	templateUrl: "./books-search.component.html",

	styleUrls: [ "./books-search.component.css" ],

})

export class BooksSearchComponent {

	@Output() onSearch = new EventEmitter();


    constructor() {

        this.searchQuery = "";

    };

};
